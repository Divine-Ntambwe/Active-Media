import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./Software.module.css";
import PurpleLines from "../component/purpleLines";
// import laptop from "../assets/8b33733d2e54c0a5d76d8a9d0e2dabc54a0ced29.gif";
import backgroundElement from "../assets/Frame 77.png";
import Navbar from "../component/Navbar";
import ECommercePage from "./ECommercePage";
import { useNavigate } from "react-router-dom";

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
    div3 = useRef(),
    div4 = useRef(),
    div5 = useRef(),
    title2 = useRef(),
    title3 = useRef(),
    par3 = useRef(),
    par4 = useRef(),
    cloudBasedImg = useRef(),
    supremeImg = useRef(),
    supremeImg2 = useRef(),
    laptopGif = useRef(),
    bgImg = useRef();
  const [slide, setSlide] = useState(0);
  const [show, setShow] = useState(true);
  const nav = useNavigate();
  const [laptop, setLaptop] = useState(
    "/src/assets/8b33733d2e54c0a5d76d8a9d0e2dabc54a0ced29.gif"
  );

  useEffect(() => {
    const handleScroll = (e) => {
      setTimeout(() => {
        if (e.deltaY > 10) {
          setSlide(slide + 1);
          if (slide === 0) {
            setLaptop(`/src/assets/8b33733d2e54c0a5d76d8a9d0e2dabc54a0ced29.gif?${new Date().getTime()}`);
            title1.current.classList.remove(styles.fadeIn);
            title1.current.classList.add(styles.fadeOut);
            par1.current.classList.remove(styles.fadeIn);
            par1.current.classList.add(styles.disappear);
            par2.current.classList.remove(styles.fadeIn);
            par2.current.classList.add(styles.disappear);
            cloudRef.current.classList.add(styles.fadeIn2);
            
            laptopGif.current.classList.add(styles.moveLaptop1);
            bgImg.current.style.transform =
            "translateY(200px) translateX(100px)";
          }
          if (slide === 1) {
            setLaptop(`/src/assets/8b33733d2e54c0a5d76d8a9d0e2dabc54a0ced29.gif?${new Date().getTime()}`);
            cloudBasedImg.current.classList.add(styles.disappear);
            title2.current.classList.add(styles.fadeOut2);
            par3.current.classList.add(styles.fadeOut2);
            div3.current.classList.add(styles.fadeIn3);

            laptopGif.current.classList.remove(styles.moveLaptop1);
            laptopGif.current.classList.add(styles.moveLaptop2);
            bgImg.current.style.transform = "translateY(0px) translateX(500px)";
          }
          if (slide === 2) {
            setLaptop(`/src/assets/8b33733d2e54c0a5d76d8a9d0e2dabc54a0ced29.gif?${new Date().getTime()}`);
            div3.current.classList.remove(styles.fadeIn3);
            div3.current.classList.add(styles.fadeOut3);

            div4.current.classList.add(styles.fadeIn4);

            laptopGif.current.classList.remove(styles.moveLaptop2);
            laptopGif.current.classList.add(styles.moveLaptop3);
            bgImg.current.style.transform = "translateY(0px) translateX(0px)";
           
          }

          if (slide === 3) {
            setLaptop(`/src/assets/8b33733d2e54c0a5d76d8a9d0e2dabc54a0ced29.gif?${new Date().getTime()}`);
            // div4.current.classList.remove(styles.fadeIn4);
            title3.current.classList.add(styles.fadeOut2);
            par4.current.classList.add(styles.fadeOut2);
            supremeImg.current.classList.add(styles.disappear);
            bgImg.current.style.transform = "translateY(300px) translateX(0px)";

            laptopGif.current.classList.remove(styles.moveLaptop3);
            laptopGif.current.classList.add(styles.moveLaptop4);
            div5.current.classList.add(styles.fadeIn5);
           
          }
          if (slide === 4) {
            setLaptop(`/src/assets/8b33733d2e54c0a5d76d8a9d0e2dabc54a0ced29.gif?${new Date().getTime()}`);
            supremeImg2.current.classList.add(styles.disappear);
            laptopGif.current.classList.remove(styles.moveLaptop4);
            laptopGif.current.classList.add(styles.moveLaptop5);
            bgImg.current.style.transform =
              "translateY(300px) translateX(300px)";
            bgImg.current.classList.add(styles.disappear);
           

            setTimeout(() => {
              nav("/design-marketing");
            }, 1000);
          }
        } else if (e.deltaY < -20 && e.deltaY < 0) {
          window.location.reload();
        }
      }, 100);
    };

    setTimeout(() => {
      if(window.matchMedia("(max-width:768px)").matches) return
      window.addEventListener("wheel", handleScroll);
      return () => window.removeEventListener("wheel", handleScroll);
    }, 500);
  }, [slide]);
  console.log(slide);

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
      <img src={laptop} ref={laptopGif} className={styles.laptopGif} />
      <Navbar />
      <div ref={bgImg} className={styles.bgImg}>
        <PurpleLines />
      </div>

      <section className={styles.softwareSection}>
        {/* Slide 1 */}
        <div
          className={`${styles.slide} ${styles.div1} ${
            showFirst ? styles.active : styles.fadeOutSection
          }`}
        >
          {/* <PurpleLines /> */}
          <div className={styles.textBlock}>
            <h1
              ref={title1}
              className={`${styles.title1} ${
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
              <div ref={title2}>
                <h1 className={styles.title}>CLOUD-BASED</h1>
                <h1 className={styles.title2}>SOLUTIONS</h1>
              </div>
            </div>

            <div className={styles.right}>
              <p className={styles.pinkBox} ref={par3}>
                Whether you want to move your
                <br />
                current solutions to the cloud or
                <br />
                develop
                <br />
                a new project from scratch, we got
                <br />
                you covered
              </p>
              <img
                src={backgroundElement}
                alt="decorative element"
                className={styles.backgroundDecor}
                ref={cloudBasedImg}
              />
            </div>
          </div>
        </div>

        <div ref={div3}>
          <div className={styles.div2_2}>
            <img src="/src/assets/Frame 78.png" alt="" />
          </div>
        </div>
        {/* Ozias(start) */}
        {/* Ozias(End) */}
        {/* Slide 3 (ECommerce) */}

        <div
          className={`${styles.slide} ${styles.ecommerceSection}`}
          ref={div4}
        >
          <h1 ref={title3} className={`${styles.title}`}>
            E-COMMERCE
          </h1>

          {/* First Section - like the screenshot */}
          <div className={styles.div4}>
            <div className={styles.leftSection}>
              <img
                ref={supremeImg}
                src="../src/assets/Frame 79.png"
                alt="A cut above the rest"
                className={`${styles.mainImage} 
                }`}
              />
            </div>

            <div className={styles.rightSection}>
              <p ref={par4} className={`${styles.pinkBox}`}>
                From entry level online stores to <br />
                enterprise-grade solutions, we have <br />
                the technical ability to deliver on your
                <br />
                requirements and provide you with
                <br />
                a high-converting and well-
                <br />
                performing online shopping <br />
                environment.
              </p>
            </div>
          </div>
        </div>

        <div ref={div5} className={styles.div5}>
          <div className={styles.rightSection}>
            <img
              ref={supremeImg2}
              src="../src/assets/Frame 111.png"
              alt="Supreme Build It"
              className={`${styles.supImage} ${styles.mainImage}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
