// pages/Recent_Work.jsx
import React, { useState, useRef } from "react";
import styles from "./Rhaddock.module.css";
import RhLogo from "../assets/Frame 203.png";
import Group72 from "../assets/Group 72.png";
import SupremeBanner from "../assets/image copy.png";
import SupremeLogo from "../assets/SupremeLogo.png";
import deliveryImg from "../assets/rapidtrade1.png";
import rapidtradeLogo from "../assets/rapidtrade2.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useScrollNavigation } from "../hooks/useScrollNavigation";

const Recent_Work = () => {
  const navigate = useNavigate();
  const recentWork = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const Link = [
    "https://www.supremebuildit.co.za/",
    "https://rapidtrade.com/",
    "https://www.rhaddock.co.za/",
  ];
  const headings = ["SUPREME BUILD IT", "RAPIDTRADE", "R HADDOCK"];
  const banner = [SupremeBanner, deliveryImg, Group72];
  const logo = [SupremeLogo, rapidtradeLogo, RhLogo];
  const description = [
    "Supreme Build It supplies quality building materials, hardware, and tools for builders and DIY users. With helpful services like paint-mixing, glass-cutting, and fast delivery, they make every construction or renovation project easy, affordable, and efficient from start to finish.",
    "Rapidtrade provides an advanced cloud-based system for order and sales management. It helps distributors and reps process orders, track deliveries, and manage customers efficiently through powerful mobile tools that improve accuracy, speed, and performance.",
    "R Haddock & Co offers a complete range of packaging materials for homes and businesses. From moving boxes and bubble wrap to tape and custom packaging, they provide strong, affordable, and practical solutions designed to protect products with quality and care.",
  ];

  // 🔥 FIXED: Use the hook instead of custom scroll logic
  const { currentSlide } = useScrollNavigation({
    totalSlides: headings.length,
    forwardTarget: '/contact-us',
    debounceDelay: 500,
    onSlideChange: (newSlide, direction) => {
      // 🔥 Handle backward at start
      if (direction === 'backward-at-start' && newSlide === 0) {
        navigate('/design-marketing');
        return;
      }

      setFade(false);

      setTimeout(() => {
        if (direction === 'forward' && newSlide < headings.length) {
          setCurrentIndex(newSlide);
        } else if (direction === 'backward' && newSlide >= 0) {
          setCurrentIndex(newSlide);
        }

        // If going to last slide, trigger disappear animation
        if (newSlide >= headings.length - 1 && direction === 'forward') {
          recentWork.current?.classList.add(styles.disappear);
        }

        setFade(true);
      }, 300);
    }
  });

  return (
    <div className={styles.recentWorkPage}>
      <Navbar />
      <h1 className={styles.recentWork}>
        Recent Work <br/> &<br/> Collaborators
      </h1>
      <img
        className={styles.recentBackground}
        src="./backgroundLines.png"
        alt="Background"
      />
      <div className={styles.container}>
        <div className={styles.rapidtrade} ref={recentWork}>
          <div className={styles.leftSection}>
            <h1
              className={`${styles.title} ${
                fade ? styles.fadeIn : styles.fadeOut
              }`}
            >
              {headings[currentIndex]}
            </h1>
            <p
              className={`${styles.description} ${
                fade ? styles.fadeIn : styles.fadeOut
              }`}
            >
              {description[currentIndex]}
            </p>

            <div className={styles.rapidTradeViewSite}>
              <a
                href={Link[currentIndex]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="100"
                  height="66"
                  viewBox="0 0 166 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Your SVG content here */}
                </svg>
              </a>
            </div>

            <div className={styles.deliverySection}>
              <img
                src={banner[currentIndex]}
                alt="Delivery"
                className={`${styles.deliveryImg} ${
                  fade ? styles.fadeImgIn : styles.fadeImgOut
                }`}
              />
            </div>
          </div>
          <div className={styles.deliverySection}>
            <img
              src={logo[currentIndex]}
              alt="Logo"
              className={`${styles.logoImg} ${
                fade ? styles.fadeRightIn : styles.fadeRightOut
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent_Work;