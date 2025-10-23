import React, { useEffect, useRef, useState } from "react";
import styles from "./Digital_Marketing.module.css";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
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
  const page = useRef();
  let scrollDiff; 
  let num = 0;
  useEffect(() => {
    scrollDiff = window.matchMedia("(max-width:2201px) and (min-width: 576px)").matches?15:25
    function onScroll(e) {
      setTimeout(() => {
        if (e.deltaY > 15) {
          if (index === 0) {
            BGImg.current.style.top = "100px";

            heading.current.classList.add(styles.moveUp);
            // heading.current.style.animationFillMode = "forwards"

            par.current.classList.add(styles.disappear);
            // par.current.style.animationFillMode = "forwards"

            wrapper.current.classList.add(styles.moveUp);
            // wrapper.current.style.animationFillMode = "forwards"
          }
          if (index === 1) {
            BGImg.current.style.left = "800px";
            BGImg.current.style.top = "100px";

            lastFour.current.classList.add(styles.moveUp2);
            //  lastFour.current.style.animationFillMode = "forwards"

            firstTwo.current.classList.add(styles.disappear);
            //  firstTwo.current.style.animationFillMode = "forwards"
          }

          if (index === 2) {
            if (window.matchMedia("(max-width:2201px) and (min-width: 576px)").matches){

              container.current.classList.add(styles.slideOut);
              rwHeading.current.style.display = "inline";
              rwHeading.current.classList.add(styles.moveRW);
              BGImg.current.style.left = "800px";
              BGImg.current.style.top = "-150px";
              setTimeout(() => {
                BGImg.current.classList.add(styles.disappear);
                nav("/recent");
              }, 2000);
            }else {

              lastFour.current.style.transform="translateY(-800px)"
            }


            
          }
          setIndex(index + 1);
        }else if (e.deltaY < -20 && e.deltaY < 0) {
          window.location.reload();
        }
      }, 100);
    }

    setTimeout(() => {
      // if (window.matchMedia("(max-width: 576px)").matches) return
      window.addEventListener("wheel", onScroll);
      return () => window.removeEventListener("wheel", onScroll);
    }, 500);
  }, [index]);




  return (
    <>
      <div ref={page}className={styles.designMarketingPage}>
        <Navbar />
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
