import React, { useEffect, useRef, useState } from "react";
import styles from "./Digital_Marketing.module.css";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import cardOne from "../assets/Group 30.png"
import cardTwo from "../assets/Group 36.png"
import cardThree from "../assets/Group 43.png"
import cardFour from "../assets/Group 42.png"
import cardFive from "../assets/Group 39.png"
import cardSix from "../assets/Group 40.png"
import cardOneSmall from "../assets/Group 31.png"
import cardTwoSmall from "../assets/Group 44.png"
import cardFourSmall from "../assets/Group 46.png"
import cardThreeSmall from "../assets/Group 45.png"
import cardFiveSmall from "../assets/Group 48.png"
import cardSixSmall from "../assets/Group 47.png"


const Digital_Marketing = () => {
  const [lastY, setLastY] = useState(0);
  const [index, setIndex] = useState(0);
  const BGImg = useRef();
  const heading = useRef();
  const par = useRef();
  const container = useRef();
  const wrapper = useRef();
  const lastFour = useRef();
  const firstTwo = useRef();
  const rwHeading = useRef();
  const nav = useNavigate();
  const [smallScreenSize,setSmallScreen] = useState(false)

  useEffect(() => {
    setSmallScreen(!window.matchMedia("(max-width:2201px) and (min-width: 1025px)").matches)
    function handleScroll(deltaY) {
      if (deltaY > 25) {
        if (index === 0) {
          BGImg.current.style.top = "100px";
          heading.current.classList.add(styles.moveUp);
          par.current.classList.add(styles.disappear);
          wrapper.current.classList.add(styles.moveUp);
        }
        if (index === 1) {
          BGImg.current.style.left = "800px";
          BGImg.current.style.top = "100px";
          lastFour.current.classList.add(styles.moveUp2);
          firstTwo.current.classList.add(styles.disappear);
        }
        if (index === 2) {
         if (window.matchMedia("(max-width:2201px) and (min-width: 1025px)").matches){

              container.current.classList.add(styles.slideOut);
              // rwHeading.current.style.display = "inline";
              // rwHeading.current.classList.add(styles.moveRW);
              BGImg.current.style.left = "800px";
              BGImg.current.style.top = "-150px";
              setTimeout(() => {
                BGImg.current.classList.add(styles.disappear);
                nav("/recent");
              }, 800);
            }else {
              lastFour.current.style.transform="translateY(var(--lastTwo))"
            }
        }
        if (index == 3){
          nav("/recent");
        }
        setIndex(index + 1);
      } else if (deltaY < -25) {
        window.location.reload();
      }
    }

    function onWheel(e) {
      setTimeout(() => handleScroll(e.deltaY), 100);
    }

    let touchStartY = 0;
    function onTouchStart(e) {
      touchStartY = e.touches[0].clientY;
    }

    function onTouchMove(e) {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY;
      setTimeout(() => handleScroll(deltaY), 100);
    }

    setTimeout(() => {
      window.addEventListener("wheel", onWheel);
      window.addEventListener("touchstart", onTouchStart);
      window.addEventListener("touchmove", onTouchMove);

      return () => {
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
      };
    }, 500);
  }, [index]);
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
                <img src={smallScreenSize?cardOneSmall:cardOne} />
              </div>

              {/* Card 2 */}
              <div className={styles.cardTwo}>
                <img src={smallScreenSize?cardTwoSmall:cardTwo} />
              </div>
            </div>

            <div ref={lastFour} className={styles.lastFour}>
              <div className={styles.cardThree}>
                <img src={smallScreenSize?cardThreeSmall:cardThree} />
              </div>

              <div className={styles.cardFour}>
                <img src={smallScreenSize?cardFourSmall:cardFour} />
              </div>

              {/* Card 4 */}
              <div className={styles.cardFive}>
                <img src={smallScreenSize?cardFiveSmall:cardFive}  />
              </div>

              {/* Card 5 */}
              <div className={styles.cardSix}>
                <img src={smallScreenSize?cardSixSmall:cardSix}  />
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
