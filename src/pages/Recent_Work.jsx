import React, { useRef, useEffect, useState } from 'react';
import styles from "./Recent_Work.module.css";

// Import the 3D RH logo
import RhLogo from "../assets/Frame 203.png";
import Group72 from "../assets/Group 72.png";
import Blending from "../assets/blending 1755804129410.png";

import SupremeLogo from "../assets/SupremeLogo.png"
import SupremeBannerImage from "../assets/SupremeBanner.jpg" // Renamed the variable for clarity

const Recent_Work = () => {
  // Logic required to trigger ANY scroll animation
  const supremeRef = useRef(null);
  const [isSupremeVisible, setIsSupremeVisible] = useState(false);
  const [hasScrolledOut, setHasScrolledOut] = useState(false); // New state for exit animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Entering the viewport: Trigger fade-in
          setIsSupremeVisible(true);
          setHasScrolledOut(false);
          // Do NOT unobserve here, as we need to detect when it leaves.
        } else {
          // Leaving the viewport: Trigger fade-out ONLY if it was previously visible
          if (isSupremeVisible) {
            setHasScrolledOut(true);
          }
          setIsSupremeVisible(false);
        }
      },
      {
        // Use a small root margin to detect when the element is just leaving the screen
        threshold: 0.1, 
        rootMargin: '0px 0px -10% 0px' // Helps detect exit sooner
      }
    );

    if (supremeRef.current) {
      observer.observe(supremeRef.current);
    }

    return () => {
      if (supremeRef.current) {
        observer.disconnect();
      }
    };
  }, [isSupremeVisible]); // isSupremeVisible is included to re-run effect for logic updates


  // Determine the class for the Supreme Content block
  const supremeContentClasses = `${styles.SupremeContent} ${
    isSupremeVisible ? styles.fadeInSlide : hasScrolledOut ? styles.fadeOutUp : ''
  }`;
  
  return (
    <>
      {/* Supreme */}
      <div className={styles.supreme} ref={supremeRef}>
        <div className={styles.wrapperSupreme}>
        {/* Left Column */}
        <div className={styles.SupremeLeft}>
          {/* 1. Animate: Heading and Paragraph Block (Entrance & Exit Animation) */}
          <div className={supremeContentClasses}>
            {/* Heading */}
          <h1 className={styles.SupremeHeading}>SUPREME BUILD IT</h1>

            {/* Paragraph (Static content) */}
            <p className={styles.SupremeParagraph}>
              Yorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam eu turpis molestie,
              dictum est a, mattis tellus. Sed dignissim,
              metus nec fringilla accumsan, risus sem sollicitudin
              lacus, ut interdum tellus elit sed risus. Maecenas
              eget condimentum velit, sit amet feugiat lectus.
            </p>
          </div>

          {/* 2. Animate: Blending Image (Delay 1) */}
          <div className={`${styles.SupremeBlendingSection} ${isSupremeVisible ? styles.fadeInSlide + ' ' + styles.delay1 : ''}`}>
            <img src={Blending} alt="blending effect" className={styles.SupremeBlendingImage} />
          </div>

          {/* View Site Section (Static) */}
          <div className={styles.SupremeViewSite}>
            {/* <img
              src="https://via.placeholder.com/30x30"
              alt="arrow-icon"
              className={styles.arrow}
            />
            <span className={styles.viewText}>View Site</span> */}
          </div>

          {/* 3. Static: Website Preview (No fade-in, static) */}
          <div className={styles.SupremeBanner}>
            <img src={SupremeBannerImage} alt="website-preview" />
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.SupremeRight}>
            {/* 4. Animate: Supreme Logo (Slide-from-Right, Delay 2) */}
            <img
              src={SupremeLogo}
              alt="Supreme logo"
              className={`${styles.SupremeLogoImage} ${isSupremeVisible ? styles.fadeInSlide + ' ' + styles.delay2 : ''}`}
            />
        </div>
      </div>
      </div>

      {/* RapidTrade */}
      <div className={styles.rapidtrade}></div>

      {/* Rhaddock */}
      <div className={styles.rhaddock}>
        <div className={styles.wrapper}>
        {/* Left Column (Original Sam's classes, unchanged) */}
        <div className={styles.left}> 
          {/* Heading */}
          <h1 className={styles.heading}>R HADDOCK</h1>

          {/* Paragraph */}
          <p className={styles.paragraph1}>
            Yorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Etiam eu
            turpis molestie, dictum est <br /> a, mattis tellus. Sed dignissim, metus nec
             fringilla <br /> accumsan, risus sem sollicitudin lacus, ut interdum <br /> tellus
            elit sed risus. Maecenas eget condimentum <br /> velit, sit amet feugiat
            lectus.
          </p>

          {/* Blending Image */}
          <div className={styles.blendingSection}>
            <img src={Blending} alt="blending effect" className={styles.blendingImage} />
          </div>

          {/* View Site Section */}
          <div className={styles.viewSite}>
            <img
              src="https://via.placeholder.com/30x30"
              alt="arrow-icon"
              className={styles.arrow}
            />
            <span className={styles.viewText}>View Site</span>
          </div>

          {/* Website Preview */}
          <div className={styles.websitePreview}>
            <img src={Group72} alt="website-preview" />
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.right}>
          <div className={styles.logoCard}>
            <img
              src={RhLogo}
              alt="3D RH logo"
              className={styles.logo}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Recent_Work;