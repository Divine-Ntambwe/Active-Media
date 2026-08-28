// pages/Software.jsx
import React, { useEffect, useState, useRef } from "react";
import styles from "./Software.module.css";
import PurpleLines from "../component/purpleLines";
import purpleLaptop from "../assets/8b33733d2e54c0a5d76d8a9d0e2dabc54a0ced29.gif";
import backgroundElement from "../assets/Frame 77.png";
import frame78 from "../assets/Frame 78.png";
import frame79 from "../assets/Frame 79.png";
import frame111 from "../assets/Frame 111.png";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";

function useSoftwareScroll(onSlideChange, navigate) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentSlideRef = useRef(0);
  const callbackRef = useRef(onSlideChange);

  useEffect(() => {
    callbackRef.current = onSlideChange;
  }, [onSlideChange]);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1023px)").matches) return undefined;

    let isScrolling = false;
    let touchStartY = 0;
    const unlockDelay = 600;

    const move = (direction) => {
      if (isScrolling) return;
      isScrolling = true;

      const previousSlide = currentSlideRef.current;
      const nextSlide = direction === "forward" ? previousSlide + 1 : previousSlide - 1;

      if (nextSlide < 0) {
        navigate("/about-us");
      } else if (nextSlide >= 5) {
        navigate("/design-marketing");
      } else {
        currentSlideRef.current = nextSlide;
        setCurrentSlide(nextSlide);
        callbackRef.current(nextSlide, direction);
      }

      window.setTimeout(() => {
        isScrolling = false;
      }, unlockDelay);
    };

    const onWheel = (event) => {
      if (event.deltaY > 20) move("forward");
      if (event.deltaY < -20) move("backward");
    };

    const onTouchStart = (event) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchEnd = (event) => {
      const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY;
      const deltaY = touchStartY - touchEndY;
      if (deltaY > 50) move("forward");
      if (deltaY < -50) move("backward");
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [navigate]);

  return currentSlide;
}

export default function Software() {
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(purpleLaptop);
  
  // Refs for animation elements
  const title1 = useRef(), par1 = useRef(), par2 = useRef();
  const div2Content = useRef(), div3 = useRef(), div4 = useRef();
  const div5 = useRef(), laptopGif = useRef(), bgImg = useRef();
  const div4Content = useRef(), cloudRef = useRef();
  const title2 = useRef(), title3 = useRef(), par3 = useRef();
  const par4 = useRef(), cloudBasedImg = useRef();
  const supremeImg = useRef(), supremeImg2 = useRef();

  const currentSlide = useSoftwareScroll((newSlide, direction) => {
      // Handle backward at start
      if (direction === 'backward-at-start' && newSlide === 0) {
        navigate('/about-us');
        return;
      }
      
      const prevSlide = newSlide - 1;
      
      // ============================================
      // FORWARD: Add animations
      // ============================================
      if (direction === 'forward') {
        if (prevSlide === 0) {
          setLaptop(`${purpleLaptop}?${Date.now()}`);
          title1.current?.classList.remove(styles.fadeIn);
          title1.current?.classList.add(styles.fadeOut);
          par1.current?.classList.remove(styles.fadeIn);
          par1.current?.classList.add(styles.disappear);
          par2.current?.classList.remove(styles.fadeIn);
          par2.current?.classList.add(styles.disappear);
          cloudRef.current?.classList.add(styles.fadeIn2);
          laptopGif.current?.classList.add(styles.moveLaptop1);
          if (bgImg.current) {
            bgImg.current.style.transform = "translateY(200px) translateX(100px)";
          }
        }

        if (prevSlide === 1) {
          setLaptop(`${purpleLaptop}?${Date.now()}`);
          div3.current?.classList.add(styles.fadeIn3);
          if (div2Content.current) {
            div2Content.current.style.transform = "translateY(-550px)";
          }
          laptopGif.current?.classList.remove(styles.moveLaptop1);
          laptopGif.current?.classList.add(styles.moveLaptop2);
          if (bgImg.current) {
            bgImg.current.style.transform = "translateY(0px) translateX(500px)";
          }
        }

        if (prevSlide === 2) {
          setLaptop(`${purpleLaptop}?${Date.now()}`);
          div2Content.current?.classList.add(styles.disappear);
          div3.current?.classList.remove(styles.fadeIn3);
          div3.current?.classList.add(styles.fadeOut3);
          div4.current?.classList.add(styles.fadeIn4);
          laptopGif.current?.classList.remove(styles.moveLaptop2);
          laptopGif.current?.classList.add(styles.moveLaptop3);
          if (bgImg.current) {
            bgImg.current.style.transform = "translateY(0px) translateX(0px)";
          }
        }

        if (prevSlide === 3) {
          setLaptop(`${purpleLaptop}?${Date.now()}`);
          if (div4Content.current) {
            div4Content.current.style.transform = "translateY(-550px)";
          }
          if (bgImg.current) {
            bgImg.current.style.transform = "translateY(300px) translateX(0px)";
          }
          div5.current?.classList.add(styles.fadeIn5);
          laptopGif.current?.classList.remove(styles.moveLaptop3);
          laptopGif.current?.classList.add(styles.moveLaptop4);
        }

        if (prevSlide === 4) {
          setLaptop(`${purpleLaptop}?${Date.now()}`);
          div4Content.current?.classList.add(styles.disappear);
          supremeImg2.current?.classList.add(styles.disappear);
          laptopGif.current?.classList.remove(styles.moveLaptop4);
          laptopGif.current?.classList.add(styles.moveLaptop5);
          if (bgImg.current) {
            bgImg.current.style.transform = "translateY(300px) translateX(300px)";
            bgImg.current.classList.add(styles.disappear);
          }
        }
      }

      // ============================================
      // BACKWARD: REMOVE animations (RESET!)
      // ============================================
      if (direction === 'backward') {
        // When going BACK to Slide 0 (first slide)
        if (newSlide === 0) {
          // Reset all animations
          title1.current?.classList.remove(styles.fadeOut);
          title1.current?.classList.add(styles.fadeIn);
          par1.current?.classList.remove(styles.disappear);
          par1.current?.classList.add(styles.fadeIn);
          par2.current?.classList.remove(styles.disappear);
          par2.current?.classList.add(styles.fadeIn);
          
          // Remove cloud animations
          cloudRef.current?.classList.remove(styles.fadeIn2);
          
          // Reset laptop position
          laptopGif.current?.classList.remove(
            styles.moveLaptop1,
            styles.moveLaptop2,
            styles.moveLaptop3,
            styles.moveLaptop4,
            styles.moveLaptop5
          );
          
          // Reset background
          if (bgImg.current) {
            bgImg.current.style.transform = "";
            bgImg.current.classList.remove(styles.disappear);
          }
          
          // Reset div3
          div3.current?.classList.remove(styles.fadeIn3, styles.fadeOut3);
          
          // Reset div4
          div4.current?.classList.remove(styles.fadeIn4);
          
          // Reset div5
          div5.current?.classList.remove(styles.fadeIn5);
          
          // Reset div2Content
          if (div2Content.current) {
            div2Content.current.style.transform = "";
            div2Content.current.classList.remove(styles.disappear);
          }
          
          // Reset div4Content
          if (div4Content.current) {
            div4Content.current.style.transform = "";
            div4Content.current.classList.remove(styles.disappear);
          }
          
          // Reset supremeImg2
          supremeImg2.current?.classList.remove(styles.disappear);
        }

        // When going BACK to Slide 1 (cloud section)
        if (newSlide === 1) {
          // Remove div3 animations
          div3.current?.classList.remove(styles.fadeIn3, styles.fadeOut3);
          
          // Reset laptop to moveLaptop1 position
          laptopGif.current?.classList.remove(
            styles.moveLaptop2,
            styles.moveLaptop3,
            styles.moveLaptop4,
            styles.moveLaptop5
          );
          laptopGif.current?.classList.add(styles.moveLaptop1);
          
          // Reset div2Content
          if (div2Content.current) {
            div2Content.current.style.transform = "";
            div2Content.current.classList.remove(styles.disappear);
          }
          
          // Reset background
          if (bgImg.current) {
            bgImg.current.style.transform = "translateY(200px) translateX(100px)";
            bgImg.current.classList.remove(styles.disappear);
          }
        }

        // When going BACK to Slide 2 (E-commerce)
        if (newSlide === 2) {
          // Remove div4 animations
          div4.current?.classList.remove(styles.fadeIn4);
          
          // Reset laptop to moveLaptop2 position
          laptopGif.current?.classList.remove(
            styles.moveLaptop3,
            styles.moveLaptop4,
            styles.moveLaptop5
          );
          laptopGif.current?.classList.add(styles.moveLaptop2);
          
          // Reset div3
          div3.current?.classList.remove(styles.fadeOut3);
          div3.current?.classList.add(styles.fadeIn3);
          
          // Reset background
          if (bgImg.current) {
            bgImg.current.style.transform = "translateY(0px) translateX(500px)";
          }
        }

        // When going BACK to Slide 3
        if (newSlide === 3) {
          // Reset div5 animations
          div5.current?.classList.remove(styles.fadeIn5);
          
          // Reset laptop to moveLaptop3 position
          laptopGif.current?.classList.remove(
            styles.moveLaptop4,
            styles.moveLaptop5
          );
          laptopGif.current?.classList.add(styles.moveLaptop3);
          
          // Reset div4Content
          if (div4Content.current) {
            div4Content.current.style.transform = "";
            div4Content.current.classList.remove(styles.disappear);
          }
          
          // Reset background
          if (bgImg.current) {
            bgImg.current.style.transform = "translateY(0px) translateX(0px)";
          }
        }

        // When going BACK to Slide 4
        if (newSlide === 4) {
          // Reset laptop to moveLaptop4 position
          laptopGif.current?.classList.remove(styles.moveLaptop5);
          laptopGif.current?.classList.add(styles.moveLaptop4);
          
          // Reset background
          if (bgImg.current) {
            bgImg.current.style.transform = "translateY(300px) translateX(0px)";
            bgImg.current.classList.remove(styles.disappear);
          }
        }
      }
  }, navigate);

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
            currentSlide === 0 ? styles.active : styles.fadeOutSection
          }`}
        >
          <div className={styles.textBlock}>
            <h1
              ref={title1}
              className={`${styles.title1} ${
                currentSlide === 0 ? styles.fadeIn : styles.fadeOut
              }`}
            >
              Software <br /> Development
            </h1>

            <div
              ref={par1}
              className={`${styles.services} ${
                currentSlide === 0 ? styles.fadeIn : styles.fadeOut
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
              currentSlide === 0 ? styles.fadeIn : styles.fadeOut
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
          className={`${styles.slide} ${styles.container} ${styles.div2}`}
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
                <div className={`${styles.pinkPar2}`}>
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

        {/* Slide 3 (ECommerce) */}
        <div
          className={`${styles.slide} ${styles.ecommerceSection}`}
          ref={div4}
        >
          <div ref={div4Content} className={styles.div4Content}>
            <h1 ref={title3} className={`${styles.title}`}>
              E-COMMERCE
            </h1>

            <div className={styles.div4}>
              <div className={styles.leftSection}>
                <img
                  ref={supremeImg}
                  src={`${frame79}`}
                  alt="A cut above the rest"
                  className={`${styles.mainImage}`}
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
    </div>
  );
}