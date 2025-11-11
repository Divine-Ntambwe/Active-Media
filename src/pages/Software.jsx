import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./Software.module.css";
import PurpleLines from "../component/purpleLines";
import purpleLaptop from "../assets/8b33733d2e54c0a5d76d8a9d0e2dabc54a0ced29.gif";
import backgroundElement from "../assets/Frame 77.png";
import frame78 from "../assets/Frame 78.png";
import frame79 from "../assets/Frame 79.png";
import frame111 from "../assets/Frame 111.png";

import Navbar from "../component/Navbar";
import ECommercePage from "./ECommercePage";
import { useNavigate } from "react-router-dom";

export default function Software() {
  const [showFirst, setShowFirst] = useState(true);

  // For Cloud_Based_Solutions
  const cloudRef = useRef(null);
  const [cloudFadeClass, setCloudFadeClass] = useState("");

  const div1 = useRef();
  const par1 = useRef(),
    title1 = useRef(),
    par2 = useRef(),
    div2 = useRef(),
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
    bgImg = useRef(),
    div2Content = useRef(),
    div4Content = useRef();
  const [slide, setSlide] = useState(0);
  const [show, setShow] = useState(true);
  const nav = useNavigate();
  const [laptop, setLaptop] = useState(`${purpleLaptop}`);

  useEffect(
    () => {
      const SWIPE_THRESHOLD = 50; // pixels
      const DEBOUNCE_MS = 300; // prevent rapid repeats

      const isAnimatingRef = { current: false };
      let lastTrigger = 0;
      let touchStartY = 0;

      const advanceSlide = () => {
        if (isAnimatingRef.current) return;
        const now = Date.now();
        if (now - lastTrigger < DEBOUNCE_MS) return;
        lastTrigger = now;
        isAnimatingRef.current = true;

        setSlide((prevSlide) => {
          const next = prevSlide + 1;

          // Run transition logic for the NEXT slide (mirrors original checks on slide)
          if (prevSlide === 0) {
            setLaptop(`${purpleLaptop}?${Date.now()}`);
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

          if (prevSlide === 1) {
            setLaptop(`${purpleLaptop}?${Date.now()}`);
            div3.current.classList.add(styles.fadeIn3);
            div2Content.current.style.transform = "translateY(-550px)";
            laptopGif.current.classList.remove(styles.moveLaptop1);
            laptopGif.current.classList.add(styles.moveLaptop2);
            bgImg.current.style.transform = "translateY(0px) translateX(500px)";
          }

          if (prevSlide === 2) {
            setLaptop(`${purpleLaptop}?${Date.now()}`);
            div2Content.current.classList.add(styles.disappear);
            div3.current.classList.remove(styles.fadeIn3);
            div3.current.classList.add(styles.fadeOut3);
            div4.current.classList.add(styles.fadeIn4);
            laptopGif.current.classList.remove(styles.moveLaptop2);
            laptopGif.current.classList.add(styles.moveLaptop3);
            bgImg.current.style.transform = "translateY(0px) translateX(0px)";
          }

          if (prevSlide === 3) {
            setLaptop(`${purpleLaptop}?${Date.now()}`);
            div4Content.current.style.transform = "translateY(-550px)";
            bgImg.current.style.transform = "translateY(300px) translateX(0px)";
            div5.current.classList.add(styles.fadeIn5);
            laptopGif.current.classList.remove(styles.moveLaptop3);
            laptopGif.current.classList.add(styles.moveLaptop4);
          }

          if (prevSlide === 4) {
            setLaptop(`${purpleLaptop}?${Date.now()}`);
            div4Content.current.classList.add(styles.disappear);
            supremeImg2.current.classList.add(styles.disappear);
            laptopGif.current.classList.remove(styles.moveLaptop4);
            laptopGif.current.classList.add(styles.moveLaptop5);
            bgImg.current.style.transform =
              "translateY(300px) translateX(300px)";
            bgImg.current.classList.add(styles.disappear);

            setTimeout(() => {
              window.addEventListener("wheel", wheelHandler); // restore wheel if you removed it
              nav("/design-marketing");
            }, 1000);
          }

          // allow next trigger after a short delay so animations can start
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, Math.max(DEBOUNCE_MS, 600));

          return next;
        });
      };

      const wheelHandler = (e) => {
        // small delay to match your original setTimeout( ..., 100)
        setTimeout(() => {
          if (e.deltaY > 20) {
            advanceSlide();
          } else if (e.deltaY < -20) {
            window.location.reload();
          }
        }, 100);
      };

      const touchStart = (e) => {
        if (!e.touches || e.touches.length === 0) return;
        touchStartY = e.touches[0].clientY;
      };

      const touchEnd = (e) => {
        const touchEndY =
          (e.changedTouches && e.changedTouches[0].clientY) || 0;
        const deltaY = touchStartY - touchEndY;

        if (deltaY > SWIPE_THRESHOLD) {
          advanceSlide();
        } else if (deltaY < -SWIPE_THRESHOLD) {
          window.location.reload();
        }
      };

      // Attach listeners after a small delay (keeps your original timing)
      const attachTimeout = setTimeout(() => {
        if (window.matchMedia("(min-width:1023px)").matches) {
          window.addEventListener("wheel", wheelHandler, { passive: true });
          window.addEventListener("touchstart", touchStart, { passive: true });
          window.addEventListener("touchend", touchEnd, { passive: true });
        }
      }, 500);

      return () => {
        clearTimeout(attachTimeout);
        window.removeEventListener("wheel", wheelHandler);
        window.removeEventListener("touchstart", touchStart);
        window.removeEventListener("touchend", touchEnd);
      };
    },
    [
      /* no slide here because we use functional updates inside */
    ]
  );

  const bottomDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.transition = "opacity 1s ease";
          document.body.style.opacity = "0";

          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });

          setTimeout(() => {
            document.body.style.opacity = "1";
            nav("/design-marketing");
          }, 1500);
        }
      },
      { threshold: 0.5 }
    );

    const current = bottomDivRef.current;
    if (current) observer.observe(current);

    return () => current && observer.unobserve(current);
  }, [nav]);

  return (
    <div className={styles.softwarePage}>
      <img src={laptop} ref={laptopGif} className={styles.laptopGif} />
      <div ref={bgImg} className={styles.bgImg}>
        <PurpleLines />
      </div>
      <Navbar />

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
            className={`${styles.paragraphBox} ${styles.firstPar} ${
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
          <div ref={div2Content} className={styles.div2Content}>
            <div className={styles.content}>
              <div className={styles.left}>
                <div ref={title2}>
                  <h1 className={styles.title}>CLOUD-BASED</h1>
                  <h1 className={styles.title2}>SOLUTIONS</h1>
                </div>
              </div>

              <div className={styles.right}>
                <div
                 className={`${styles.pinkPar2}`}
                >

                <p
                  id={`${styles.edit}`}
                  className={`${styles.pinkBox1} ${styles.pinkBox}`}
                  ref={par3}
                >
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
                </div>
                <img
                  src={backgroundElement}
                  alt="decorative element"
                  className={styles.backgroundDecor}
                  ref={cloudBasedImg}
                />
              </div>
            </div>
          </div>
        </div>

        <div ref={div3}>
          <div className={styles.div2_2}>
            <img src={`${frame78}`} alt="" />
          </div>
        </div>
        {/* Ozias(start) */}
        {/*  */}
        {/* Slide 3 (ECommerce) */}

        <div
          className={`${styles.slide} ${styles.ecommerceSection}`}
          ref={div4}
        >
          <div ref={div4Content} className={styles.div4Content}>
            <h1 ref={title3} className={`${styles.title}`}>
              E-COMMERCE
            </h1>

            {/* First Section - like the screenshot */}
            <div className={styles.div4}>
              <div className={styles.leftSection}>
                <img
                  ref={supremeImg}
                  src={`${frame79}`}
                  alt="A cut above the rest"
                  className={`${styles.mainImage} 
                }`}
                />
              </div>

              <div className={styles.rightSection}>
                <p
                  ref={par4}
                  className={`${styles.pinkBox} ${styles.pinkBox3}`}
                >
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
        </div>

        <div ref={div5} className={styles.div5}>
          <div className={styles.rightSection}>
            <img
              ref={supremeImg2}
              src={`${frame111}`}
              alt="Supreme Build It"
              className={`${styles.supImage} ${styles.mainImage}`}
            />
          </div>
        </div>
      </section>
      <div ref={bottomDivRef} className="navigateToMarketing">
        l
      </div>
    </div>
  );
}
