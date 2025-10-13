import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./ECommercePage.module.css";

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const ECommercePage = () => {
  const placeholder1Ref = useRef(null); // top laptop spot
  const placeholder2Ref = useRef(null); // bottom laptop spot
  const laptopRef = useRef(null);
  const supremeRef = useRef(null); // reference for Supreme Build It image
  const titleRef = useRef(null); // reference for title
  const descriptionRef = useRef(null); // reference for description
  const firstImageRef = useRef(null); // reference for first section image
  const laptopImageRef = useRef(null); // reference for laptop image

  // Motion values (numbers are in px for top/left/width)
  const topMV = useMotionValue(window?.innerHeight ? window.innerHeight * 0.75 : 700); // visible by default
  const leftMV = useMotionValue(window?.innerWidth ? window.innerWidth * 0.5 : 400);
  const widthMV = useMotionValue(240);

  // smooth springs so movement looks organic
  const topSpring = useSpring(topMV, { stiffness: 120, damping: 18 });
  const leftSpring = useSpring(leftMV, { stiffness: 120, damping: 18 });
  const widthSpring = useSpring(widthMV, { stiffness: 120, damping: 18 });

  // State to control visibility of Supreme Build It image
  const [isSupremeVisible, setIsSupremeVisible] = useState(false);
  // State to control fade-in animation for each element
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isFirstImageVisible, setIsFirstImageVisible] = useState(false);
  const [isSupremeImageVisible, setIsSupremeImageVisible] = useState(false);
  const [isLaptopImageVisible, setIsLaptopImageVisible] = useState(false);

  // Compute and set initial position once placeholders are mounted
  useLayoutEffect(() => {
    const setInitialFromPlaceholder = () => {
      const p1 = placeholder1Ref.current;
      if (!p1) return;
      const r1 = p1.getBoundingClientRect();
      // set so laptop sits exactly on p1 (use r1.top/left which are viewport coordinates)
      topMV.set(r1.top);
      leftMV.set(r1.left);
      widthMV.set(r1.width);
    };

    // Run immediately and after a small timeout to ensure layout is done
    setInitialFromPlaceholder();
    setTimeout(setInitialFromPlaceholder, 0);
    // Also try again on load in case fonts/images change sizes
    window.addEventListener("load", setInitialFromPlaceholder);
    return () => window.removeEventListener("load", setInitialFromPlaceholder);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // IntersectionObserver to trigger fade-in animations
  useEffect(() => {
    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // Stop observing once visible
          }
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    };

    const cleanupTitle = createObserver(titleRef, setIsTitleVisible);
    const cleanupDescription = createObserver(descriptionRef, setIsDescriptionVisible);
    const cleanupFirstImage = createObserver(firstImageRef, setIsFirstImageVisible);
    const cleanupSupremeImage = createObserver(supremeRef, setIsSupremeImageVisible);
    const cleanupLaptopImage = createObserver(laptopImageRef, setIsLaptopImageVisible);

    return () => {
      cleanupTitle();
      cleanupDescription();
      cleanupFirstImage();
      cleanupSupremeImage();
      cleanupLaptopImage();
    };
  }, []);

  useEffect(() => {
    const updateLaptopPosition = () => {
      const p1 = placeholder1Ref.current;
      const p2 = placeholder2Ref.current;
      if (!p1 || !p2) return;

      const r1 = p1.getBoundingClientRect();
      const r2 = p2.getBoundingClientRect();
      const vh = window.innerHeight;

      // We'll consider the "trigger line" at middle of viewport
      const triggerY = vh / 2;

      // If p1 is still below middle -> stick to p1
      if (r1.bottom > triggerY) {
        topMV.set(r1.top);
        leftMV.set(r1.left);
        widthMV.set(r1.width);
        return;
      }

      // If p2 top is above middle -> stick to p2
      if (r2.top < triggerY) {
        topMV.set(r2.top);
        leftMV.set(r2.left);
        widthMV.set(r2.width);
        return;
      }

      // otherwise interpolate between p1 and p2 based on how far the middle line is between r1.bottom and r2.top
      const start = r1.bottom;
      const end = r2.top;
      const denom = end - start || 1;
      const progress = clamp((triggerY - start) / denom, 0, 1);

      // make a slightly eased progress (sinusoidal) for nicer arc-like feel
      const t = Math.sin(progress * Math.PI * 0.5); // 0..1

      const interpTop = r1.top + (r2.top - r1.top) * progress;
      const interpLeft = r1.left + (r2.left - r1.left) * t; // slight eased X
      const interpWidth = r1.width + (r2.width - r1.width) * progress;

      topMV.set(interpTop);
      leftMV.set(interpLeft);
      widthMV.set(interpWidth);
    };

    // Update visibility of Supreme Build It image on scroll
    const checkVisibility = () => {
      const supremeElement = supremeRef.current;
      if (supremeElement) {
        const rect = supremeElement.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.top < window.innerHeight;
        setIsSupremeVisible(isInView);
      }
    };

    // update on scroll + resize + initial
    window.addEventListener("scroll", updateLaptopPosition, { passive: true });
    window.addEventListener("resize", updateLaptopPosition);
    window.addEventListener("scroll", checkVisibility, { passive: true });
    updateLaptopPosition();
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", updateLaptopPosition);
      window.removeEventListener("resize", updateLaptopPosition);
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [topMV, leftMV, widthMV]);

  return (
    <div className={styles.container}>
      <h1
        ref={titleRef}
        className={`${styles.title} ${isTitleVisible ? styles.visibleFade : styles.fadeOnScroll}`}
      >
        E-COMMERCE
      </h1>

      {/* First Section - like the screenshot */}
      <div className={styles.section}>
        <div className={styles.leftSection}>
          <img
            ref={firstImageRef}
            src="../src/assets/Frame 79.png"
            alt="A cut above the rest"
            className={`${styles.mainImage} ${isFirstImageVisible ? styles.visibleFade : styles.fadeOnScroll}`}
          />
        </div>

        <div className={styles.rightSection}>
          <p
            ref={descriptionRef}
            className={`${styles.description} ${isDescriptionVisible ? styles.visibleFade : styles.fadeOnScroll}`}
          >
            From entry level online stores to enterprise-grade solutions, we
            have the technical ability to deliver on your requirements and
            provide you with a high-converting and well-performing online
            shopping environment.
          </p>

          {/* Placeholder where laptop sits initially (top) */}
          <div className={styles.lap} aria-hidden>
            <div ref={placeholder1Ref} className={styles.laptopPlaceholder} />
          </div>
        </div>
      </div>

      {/* Second Section - mirrored: laptop left, big supreme right */}
      <div className={styles.section}>
        <div className={styles.leftSection}>
          {/* bottom placeholder where laptop lands */}
          <div ref={placeholder2Ref} className={styles.laptopPlaceholder} />
        </div>

        <div className={styles.rightSection}>
          <img
            ref={supremeRef}
            src="../src/assets/Frame 111.png"
            alt="Supreme Build It"
            className={`${styles.mainImage} ${styles.fadeInFromBottom} ${
              isSupremeVisible ? styles.visible : ""
            } ${isSupremeImageVisible ? styles.visibleFade : styles.fadeOnScroll}`}
          />
        </div>
      </div>

      {/* Floating laptop that visually moves between placeholders */}
      <motion.div
        ref={laptopRef}
        className={styles.laptopContainer}
        style={{
          top: topSpring,
          left: leftSpring,
          width: widthSpring,
        }}
      >
        <img
          ref={laptopImageRef}
          src="../src/assets/computerztech-lhmk6qciBg.png"
          alt="Laptop"
          className={`${styles.laptopImage} ${isLaptopImageVisible ? styles.visibleFade : styles.fadeOnScroll}`}
        />
      </motion.div>
    </div>
  );
};

export default ECommercePage;