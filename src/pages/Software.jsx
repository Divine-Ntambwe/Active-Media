import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./Software.module.css";
import PurpleLines from "../component/purpleLines";

// Import assets for cloud section
import serverStack from "../assets/Untitled/https_/lottiefiles.com/animations/computerztech-lhmk6qciBg.png";
import backgroundElement from "../assets/Frame 77.png";
import Navbar from "../component/Navbar";

export default function Software() {
  const [showFirst, setShowFirst] = useState(true);

  // For Cloud_Based_Solutions
  const cloudRef = useRef(null);
  const [cloudFadeClass, setCloudFadeClass] = useState("");

  // For ECommercePage
  const placeholder1Ref = useRef(null); // top laptop spot
  const placeholder2Ref = useRef(null); // bottom laptop spot
  const laptopRef = useRef(null);
  const supremeRef = useRef(null); // reference for Supreme Build It image
  const titleRef = useRef(null); // reference for title
  const descriptionRef = useRef(null); // reference for description
  const firstImageRef = useRef(null); // reference for first section image
  const laptopImageRef = useRef(null); // reference for laptop image

  // Motion values (numbers are in px for top/left/width)
  const topMV = useMotionValue(
    window?.innerHeight ? window.innerHeight * 0.75 : 700
  ); // visible by default
  const leftMV = useMotionValue(
    window?.innerWidth ? window.innerWidth * 0.5 : 400
  );
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

  const div1 = useRef();
  const par1 = useRef(),
    title1 = useRef(),
    par2 = useRef(),
    div3 = useRef();
  const [slide,setSlide] = useState(0)

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 5) {
        title1.current.classList.remove(styles.fadeIn);
        title1.current.classList.add(styles.fadeOut);
        par1.current.classList.remove(styles.fadeIn);
        par1.current.classList.add(styles.disappear);
        par2.current.classList.remove(styles.fadeIn);
        par2.current.classList.add(styles.disappear);

        cloudRef.current.classList.add(styles.fadeIn2);
        
      }
      setSlide(slide => slide+1)
      console.log("hehe")
      if (e.deltaY > 6) {
         div3.current.classList.add(styles.fadeIn2);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);
  console.log(slide)

  // // Cloud observer
  // useEffect(() => {
  //   const section = cloudRef.current;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setCloudFadeClass(styles.fadeIn);
  //         } else {
  //           setCloudFadeClass(styles.fadeOut);
  //         }
  //       });
  //     },
  //     { threshold: 0.3 } // adjust sensibility
  //   );

  //   if (section) observer.observe(section);

  //   return () => {
  //     if (section) observer.unobserve(section);
  //   };
  // }, []);

  // // ECommerce layout effect and observers
  // useLayoutEffect(() => {
  //   const setInitialFromPlaceholder = () => {
  //     const p1 = placeholder1Ref.current;
  //     if (!p1) return;
  //     const r1 = p1.getBoundingClientRect();
  //     // set so laptop sits exactly on p1 (use r1.top/left which are viewport coordinates)
  //     topMV.set(r1.top);
  //     leftMV.set(r1.left);
  //     widthMV.set(r1.width);
  //   };

  //   // Run immediately and after a small timeout to ensure layout is done
  //   setInitialFromPlaceholder();
  //   setTimeout(setInitialFromPlaceholder, 0);
  //   // Also try again on load in case fonts/images change sizes
  //   window.addEventListener("load", setInitialFromPlaceholder);
  //   return () => window.removeEventListener("load", setInitialFromPlaceholder);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // // IntersectionObserver to trigger fade-in animations
  // useEffect(() => {
  //   const createObserver = (ref, setVisible) => {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           setVisible(true);
  //           observer.disconnect(); // Stop observing once visible
  //         }
  //       },
  //       { threshold: 0.2 } // Trigger when 20% of the element is visible
  //     );

  //     if (ref.current) {
  //       observer.observe(ref.current);
  //     }

  //     return () => {
  //       if (ref.current) {
  //         observer.unobserve(ref.current);
  //       }
  //     };
  //   };

  //   const cleanupTitle = createObserver(titleRef, setIsTitleVisible);
  //   const cleanupDescription = createObserver(descriptionRef, setIsDescriptionVisible);
  //   const cleanupFirstImage = createObserver(firstImageRef, setIsFirstImageVisible);
  //   const cleanupSupremeImage = createObserver(supremeRef, setIsSupremeImageVisible);
  //   const cleanupLaptopImage = createObserver(laptopImageRef, setIsLaptopImageVisible);

  //   return () => {
  //     cleanupTitle();
  //     cleanupDescription();
  //     cleanupFirstImage();
  //     cleanupSupremeImage();
  //     cleanupLaptopImage();
  //   };
  // }, []);

  // useEffect(() => {
  //   const updateLaptopPosition = () => {
  //     const p1 = placeholder1Ref.current;
  //     const p2 = placeholder2Ref.current;
  //     if (!p1 || !p2) return;

  //     const r1 = p1.getBoundingClientRect();
  //     const r2 = p2.getBoundingClientRect();
  //     const vh = window.innerHeight;

  //     // We'll consider the "trigger line" at middle of viewport
  //     const triggerY = vh / 2;

  //     // If p1 is still below middle -> stick to p1
  //     if (r1.bottom > triggerY) {
  //       topMV.set(r1.top);
  //       leftMV.set(r1.left);
  //       widthMV.set(r1.width);
  //       return;
  //     }

  //     // If p2 top is above middle -> stick to p2
  //     if (r2.top < triggerY) {
  //       topMV.set(r2.top);
  //       leftMV.set(r2.left);
  //       widthMV.set(r2.width);
  //       return;
  //     }

  //     // otherwise interpolate between p1 and p2 based on how far the middle line is between r1.bottom and r2.top
  //     const start = r1.bottom;
  //     const end = r2.top;
  //     const denom = end - start || 1;
  //     const progress = clamp((triggerY - start) / denom, 0, 1);

  //     // make a slightly eased progress (sinusoidal) for nicer arc-like feel
  //     const t = Math.sin(progress * Math.PI * 0.5); // 0..1

  //     const interpTop = r1.top + (r2.top - r1.top) * progress;
  //     const interpLeft = r1.left + (r2.left - r1.left) * t; // slight eased X
  //     const interpWidth = r1.width + (r2.width - r1.width) * progress;

  //     topMV.set(interpTop);
  //     leftMV.set(interpLeft);
  //     widthMV.set(interpWidth);
  //   };

  //   // Update visibility of Supreme Build It image on scroll
  //   const checkVisibility = () => {
  //     const supremeElement = supremeRef.current;
  //     if (supremeElement) {
  //       const rect = supremeElement.getBoundingClientRect();
  //       const isInView = rect.top >= 0 && rect.top < window.innerHeight;
  //       setIsSupremeVisible(isInView);
  //     }
  //   };

  //   // update on scroll + resize + initial
  //   window.addEventListener("scroll", updateLaptopPosition, { passive: true });
  //   window.addEventListener("resize", updateLaptopPosition);
  //   window.addEventListener("scroll", checkVisibility, { passive: true });
  //   updateLaptopPosition();
  //   checkVisibility();

  //   return () => {
  //     window.removeEventListener("scroll", updateLaptopPosition);
  //     window.removeEventListener("resize", updateLaptopPosition);
  //     window.removeEventListener("scroll", checkVisibility);
  //   };
  // }, [topMV, leftMV, widthMV]);

  // const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  return (
    <div className={styles.softwarePage}>
      <Navbar />

      <section className={styles.softwareSection}>
        {/* Slide 1 */}
        <div
          className={`${styles.slide} ${styles.div1} ${
            showFirst ? styles.active : styles.fadeOutSection
          }`}
        >
          <PurpleLines />
          <div className={styles.textBlock}>
            <h1
              ref={title1}
              className={`${styles.title} ${
                showFirst ? styles.fadeIn : styles.fadeOut
              }`}
            >
              Software <br /> Development
            </h1>

            <div
              ref={par1}
              className={`${styles.services} ${
                showFirst ? styles.fadeIn : styles.fadeOut
              }`}
            >
              <p>WEB</p>
              <p>DESIGN</p>
              <p>HOSTING</p>
            </div>
          </div>

          <div className={styles.laptopWrapper}>
            <img
              src={
                "src/assets/lottiefiles.com/animations/computerztech-lhmk6qciBg.png"
              }
              alt="Laptop"
              className={`${styles.laptopImage} ${
                showFirst ? styles.laptopFadeIn : styles.laptopFadeOut
              }`}
            />
          </div>

          <div
            ref={par2}
            className={`${styles.paragraphBox} ${
              showFirst ? styles.fadeIn : styles.fadeOut
            }`}
          >
            <p>
              With The Rapid Move of Technology, <br />
              Active Media Has Ensured That Only <br />
              The Latest In Technology Is Used In <br />
              Website Development.
            </p>
          </div>
        </div>

        {/* Slide 2 (Cloud-Based Solutions) */}
        <div
          ref={cloudRef}
          className={`${styles.slide} ${styles.container} ${styles.div2}${cloudFadeClass}`}
        >
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.serverImageContainer}>
                <img
                  src={serverStack}
                  alt="Server stack"
                  className={styles.serverImage}
                />
              </div>
              <h1 className={styles.title}>CLOUD-BASED</h1>
              <h1 className={styles.title2}>SOLUTIONS</h1>
            </div>

            <div className={styles.right}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                  Whether you want to move your
                </p>
                <p className={styles.description}>
                  current solutions to the cloud or
                </p>
                <p className={styles.description}>
                  develop <br /> a new project from scratch, we got
                </p>
                <p className={styles.description}>you covered.</p>
              </div>
              <img
                src={backgroundElement}
                alt="decorative element"
                className={styles.backgroundDecor}
              />
            </div>
          </div>
        </div>

        <div ref={div3}>
          <div className={styles.div2_2}>
            <img src="/src/assets/Frame 78.png" alt="" />
            <div className={styles.div2_3}>
              <img
                src={"src/assets/computerztech-lhmk6qciBg.png"}
                alt=""
                className={styles.laptop}
              />
            </div>
          </div>
        </div>
        {/* Ozias(start) */}
        {/* Ozias(End) */}
        {/* Slide 3 (ECommerce) */}

        <div className={`${styles.slide} ${styles.div3}`}>
          <div className={styles.ecommerceContainer}>
            <h1
              ref={titleRef}
              className={`${styles.ecommerceTitle} ${
                isTitleVisible ? styles.visibleFade : styles.fadeOnScroll
              }`}
            >
              E-COMMERCE
            </h1>

            {/* First Section - like the screenshot */}
            <div className={styles.ecommerceSection}>
              <div className={styles.ecommerceLeftSection}>
                <img
                  ref={firstImageRef}
                  src={"src/assets/Frame 79.png"}
                  alt="A cut above the rest"
                  className={`${styles.ecommerceMainImage} ${
                    isFirstImageVisible
                      ? styles.visibleFade
                      : styles.fadeOnScroll
                  }`}
                />
              </div>

              <div className={styles.ecommerceRightSection}>
                <p
                  ref={descriptionRef}
                  className={`${styles.ecommerceDescription} ${
                    isDescriptionVisible
                      ? styles.visibleFade
                      : styles.fadeOnScroll
                  }`}
                >
                  From entry level online stores to enterprise-grade solutions,
                  we have the technical ability to deliver on your requirements
                  and provide you with a high-converting and well-performing
                  online shopping environment.
                </p>

                {/* Placeholder where laptop sits initially (top) */}
                <div className={styles.lap} aria-hidden>
                  <div
                    ref={placeholder1Ref}
                    className={styles.laptopPlaceholder}
                  />
                </div>
              </div>
            </div>

            {/* Second Section - mirrored: laptop left, big supreme right */}
            <div className={styles.ecommerceSection}>
              <div className={styles.ecommerceLeftSection}>
                {/* bottom placeholder where laptop lands */}
                <div
                  ref={placeholder2Ref}
                  className={styles.laptopPlaceholder}
                />
              </div>

              <div className={styles.ecommerceRightSection}>
                <img
                  ref={supremeRef}
                  src={"src/assets/Frame 111.png"}
                  alt="Supreme Build It"
                  className={`${styles.ecommerceMainImage} ${
                    styles.fadeInFromBottom
                  } ${isSupremeVisible ? styles.visible : ""} ${
                    isSupremeImageVisible
                      ? styles.visibleFade
                      : styles.fadeOnScroll
                  }`}
                />
              </div>
            </div>

            {/* Floating laptop that visually moves between placeholders */}
            <motion.div
              ref={laptopRef}
              className={styles.ecommerceLaptopContainer}
              style={{
                top: topSpring,
                left: leftSpring,
                width: widthSpring,
              }}
            >
              <img
                ref={laptopImageRef}
                src={"src/assets/computerztech-lhmk6qciBg.png"}
                alt="Laptop"
                className={`${styles.ecommerceLaptopImage} ${
                  isLaptopImageVisible
                    ? styles.visibleFade
                    : styles.fadeOnScroll
                }`}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
