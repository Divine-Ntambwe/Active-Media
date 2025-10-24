import React, { useEffect, useRef, useState } from "react";
import styles from "./Digital_Marketing.module.css";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
const Digital_Marketing = () => {
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);
  const indexRef = useRef(0);

  const BGImg = useRef();
  const heading = useRef();
  const par = useRef();
  const container = useRef();
  const wrapper = useRef();
  const lastFour = useRef();
  const firstTwo = useRef();
  const rwHeading = useRef();
  const nav = useNavigate();

  // keep ref in sync with state so handlers read latest value
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const MOBILE_BREAKPOINT = 576;
    const TOUCH_THRESHOLD = 40; // px minimum to count as swipe
    const WHEEL_THRESHOLD = 12; // reuse your original wheel threshold
    let touchStartY = null;
    let touchLastY = null;
    let touchStartTime = 0;

    function triggerForward() {
      if (isAnimating.current) return;
      isAnimating.current = true;
      const i = indexRef.current;

      if (i === 0) {
        BGImg.current.style.top = "100px";
        heading.current.classList.add(styles.moveUp);
        par.current.classList.add(styles.disappear);
        wrapper.current.classList.add(styles.moveUp);
      } else if (i === 1) {
        BGImg.current.style.left = "800px";
        BGImg.current.style.top = "100px";
        lastFour.current.classList.add(styles.moveUp2);
        firstTwo.current.classList.add(styles.disappear);
      } else if (i === 2) {
        container.current.classList.add(styles.slideOut);
        rwHeading.current.style.display = "inline";
        rwHeading.current.classList.add(styles.moveRW);
        BGImg.current.style.left = "800px";
        BGImg.current.style.top = "-150px";
        setTimeout(() => {
          nav("/recent");
        }, 2000);
      }

      // advance index after applying animations
      setIndex(prev => prev + 1);

      // allow new input after animations settle (tweak timeout to match CSS durations)
      const ANIM_CLEAR_MS = 1200;
      setTimeout(() => {
        isAnimating.current = false;
      }, ANIM_CLEAR_MS);
    }

    function triggerReload() {
      // keep same behaviour for big reverse wheel on desktop
      window.location.reload();
    }

    function onWheel(e) {
      if (window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches) return;
      // ignore small wheel moves
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
      if (e.deltaY > 0) {
        triggerForward();
      } else if (e.deltaY < 0 && e.deltaY < -20) {
        triggerReload();
      }
    }

    function onTouchStart(e) {
      if (e.touches.length !== 1) return;
      touchStartY = e.touches[0].clientY;
      touchLastY = touchStartY;
      touchStartTime = Date.now();
    }

    function onTouchMove(e) {
      if (!touchStartY || e.touches.length !== 1) return;
      touchLastY = e.touches[0].clientY;
    }

    function onTouchEnd() {
      if (touchStartY == null) return;
      const dy = touchStartY - touchLastY;
      const dt = Date.now() - touchStartTime;
      // quick upward swipe or long/slow but large enough swipe
      if (dy > TOUCH_THRESHOLD) {
        triggerForward();
      } else if (dy < -TOUCH_THRESHOLD) {
        // on mobile, mimic reload on large downward swipe (optional)
        window.location.reload();
      }
      touchStartY = null;
      touchLastY = null;
    }

    // Add listeners
    // Delay attaching wheel slightly to match original behavior
    const attachTimeout = setTimeout(() => {
      if (!window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches) {
        window.addEventListener("wheel", onWheel, { passive: true });
      }
      // Always add touch listeners for mobile
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
    }, 500);

    // cleanup
    return () => {
      clearTimeout(attachTimeout);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

 




  return (
    <>
      <div className={styles.designMarketingPage}>
        <div className={styles.rwHeadingContainer}>

        <h1 ref={rwHeading} className={styles.recentWork}>
          RECENT WORKS
        </h1>
        </div>
        <img
          ref={BGImg}
          className={styles.digitalBackground}
          src="./backgroundLines.png"
        />
        <Navbar />
        <div ref={container} className={styles.container}>
          <h1 ref={heading}>
            GRAPHIC DESIGN &<br />
            DIGITAL MARKETING
          </h1>

          <div ref={par} className={styles.paragraphs}>
            <p>
              We help businesses express the benefits of their products and
              services in an attractive, compact and<br/> concise way through
              colorful brochures, descriptive flyers, eye-catching
              advertisements etc.
            </p>

            <p>
              We have the experience and tools to help you build your brand or
              business. Having an eye catching<br/> custom logo, business cards,
              letterheads and any branding can increase both online and offline<br/>
              presence of your business substantially. Work with creative
              individuals to build your brand through<br/> custom, memorable design.
            </p>
          </div>

          <div ref={wrapper} className={styles.wrapper}>
            {/* Card 1 */}
            <div ref={firstTwo} className={styles.firstTwo}>
              <div className={styles.cardOne}>
                <img src="src\assets\Group 30.png" />
              </div>

              {/* Card 2 */}
              <div className={styles.cardTwo}>
                <img src="src\assets\Group 36.png" />
              </div>
            </div>

            <div ref={lastFour} className={styles.lastFour}>
              <div className={styles.cardThree}>
                <img src="src\assets\Group 43.png" />
              </div>

              <div className={styles.cardFour}>
                <img src="src\assets\Group 42.png" />
              </div>

              {/* Card 4 */}
              <div className={styles.cardFive}>
                <img src="src\assets\Group 39.png" />
              </div>

              {/* Card 5 */}
              <div className={styles.cardSix}>
                <img src="src\assets\Group 40.png" />
              </div>
            </div>

            {/* Card 6 */}
          </div>

          {/* Card 3 */}
        </div>
      </div>
    </>
  );
};

export default Digital_Marketing;
