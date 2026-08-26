import React, { useEffect, useRef, useState } from "react";
import styles from "./Digital_Marketing.module.css";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import cardOne from "../assets/Group 30.png";
import cardTwo from "../assets/Group 36.png";
import cardThree from "../assets/Group 43.png";
import cardFour from "../assets/Group 42.png";
import cardFive from "../assets/Group 39.png";
import cardSix from "../assets/Group 40.png";
import cardOneSmall from "../assets/Group 31.png";
import cardTwoSmall from "../assets/Group 44.png";
import cardFourSmall from "../assets/Group 46.png";
import cardThreeSmall from "../assets/Group 45.png";
import cardFiveSmall from "../assets/Group 48.png";
import cardSixSmall from "../assets/Group 47.png";
import { useScrollNavigation } from "../hooks/useScrollNavigation";

const Digital_Marketing = () => {
  const navigate = useNavigate();
  const [smallScreenSize, setSmallScreen] = useState(false);
  const [isFirstSlideVisible, setIsFirstSlideVisible] = useState(true);
  
  const BGImg = useRef();
  const heading = useRef();
  const par = useRef();
  const container = useRef();
  const wrapper = useRef();
  const lastFour = useRef();
  const firstTwo = useRef();
  const rwHeading = useRef();

  useEffect(() => {
    setSmallScreen(!window.matchMedia("(min-width: 1023px)").matches);
  }, []);

  // Use unified scroll hook - TRACK the currentSlide
  const { currentSlide } = useScrollNavigation({
    totalSlides: 3,
    forwardTarget: '/recent',
    backwardTarget: '/software',
    debounceDelay: 800,
    onSlideChange: (newSlide, direction) => {
      console.log("Going to slide:", newSlide, "Direction:", direction);
      
      // Slide 0 → 1: First animation
      if (newSlide === 1) {
        if (BGImg.current) BGImg.current.style.top = "100px";
        heading.current?.classList.add(styles.moveUp);
        par.current?.classList.add(styles.disappear);
        wrapper.current?.classList.add(styles.moveUp);
        setIsFirstSlideVisible(false);
      }
      
      // Slide 1 → 2: Second animation
      if (newSlide === 2) {
        if (BGImg.current) {
          BGImg.current.style.left = "800px";
          BGImg.current.style.top = "100px";
        }
        lastFour.current?.classList.add(styles.moveUp2);
        firstTwo.current?.classList.add(styles.disappear);
      }
      
      // Slide 2 → 3: Third animation (going to recent work)
      if (newSlide === 3) {
        if (window.matchMedia("(max-width:2201px) and (min-width: 1025px)").matches) {
          container.current?.classList.add(styles.slideOut);
          if (BGImg.current) {
            BGImg.current.style.left = "800px";
            BGImg.current.style.top = "-150px";
            BGImg.current.classList.add(styles.disappear);
          }
        } else {
          if (lastFour.current) {
            lastFour.current.style.transform = "translateY(var(--lastTwo))";
          }
        }
      }

      // Handle going BACKWARD
      if (direction === 'backward') {
        // Reset animations when going back
        if (newSlide === 0) {
          setIsFirstSlideVisible(true);
          // Reset any styles that need resetting
        }
      }
    }
  });

  return (
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
        alt="Background"
      />
      <Navbar />
      
      {/* Only show container when on slides 0-2, hide when at slide 3 (going to recent) */}
      <div 
        ref={container} 
        className={styles.container}
        style={{
          opacity: currentSlide <= 2 ? 1 : 0,
          pointerEvents: currentSlide <= 2 ? 'auto' : 'none',
          transition: 'opacity 0.5s ease'
        }}
      >
        <h1 ref={heading}>
          GRAPHIC DESIGN &<br />
          DIGITAL MARKETING
        </h1>

        <div ref={par} className={styles.paragraphs}>
          <p>
            We help businesses express the benefits of their products and
            services in an attractive, compact and
            <br /> concise way through colorful brochures, descriptive flyers,
            eye-catching advertisements etc.
          </p>

          <p>
            We have the experience and tools to help you build your brand or
            business. Having an eye catching
            <br /> custom logo, business cards, letterheads and any branding
            can increase both online and offline
            <br />
            presence of your business substantially. Work with creative
            individuals to build your brand through
            <br /> custom, memorable design.
          </p>
        </div>

        <div ref={wrapper} className={styles.wrapper}>
          {/* Card 1 */}
          <div ref={firstTwo} className={styles.firstTwo}>
            <div className={styles.cardOne}>
              <img src={smallScreenSize ? cardOneSmall : cardOne} alt="Card 1" />
            </div>

            {/* Card 2 */}
            <div className={styles.cardTwo}>
              <img src={smallScreenSize ? cardTwoSmall : cardTwo} alt="Card 2" />
            </div>
          </div>

          <div ref={lastFour} className={styles.lastFour}>
            <div className={styles.cardThree}>
              <img src={smallScreenSize ? cardThreeSmall : cardThree} alt="Card 3" />
            </div>

            <div className={styles.cardFour}>
              <img src={smallScreenSize ? cardFourSmall : cardFour} alt="Card 4" />
            </div>

            <div className={styles.cardFive}>
              <img src={smallScreenSize ? cardFiveSmall : cardFive} alt="Card 5" />
            </div>

            <div className={styles.cardSix}>
              <img src={smallScreenSize ? cardSixSmall : cardSix} alt="Card 6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital_Marketing;