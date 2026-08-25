// pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import Navbar from "../component/Navbar";
import blending from "../assets/Active_M.jpg";
import clouds from "../assets/Clouds 2.png";
import { useNavigate } from 'react-router-dom';
import LoopingText from "../component/LoopingText";
import { useScrollNavigation } from "../hooks/useScrollNavigation";

function Home() {
  const navigate = useNavigate();
  const title = useRef(), button = useRef();
  const orb = useRef(), bgImg = useRef(), logo = useRef();

  const handleNavigate = () => {
    title.current?.classList.add(styles.slideOut);
    orb.current?.classList.add(styles.slideOut);
    button.current?.classList.add(styles.slideOut);
    bgImg.current?.classList.add(styles.fadeOut);
    logo.current?.classList.add(styles.fadeOut);
  };

  // Use unified scroll hook - only forward navigation needed
  useScrollNavigation({
    totalSlides: 1,
    forwardTarget: '/about-us',
    backwardTarget: '/', // Stay on home
    debounceDelay: 1200,
    onNavigateForward: handleNavigate
  });

  return (
    <div className={styles.homePage}>
      <Navbar/>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 ref={title} className={styles.title}>
              Your reliable
              <br />
              Software Development,
              <br />
              Graphic Design and Digital
              <br />
              Marketing
              <br />
              solution
            </h1>
            <button 
              ref={button} 
              onClick={() => {
                handleNavigate();
                setTimeout(() => navigate("/software"), 1900);
              }} 
              className={styles.cta} 
              aria-label="Our Services"
            >
              Our Services <span className={styles.arrow}>›</span>
            </button>
          </div>
          <div className={styles.right}>
            <div ref={bgImg} className={styles.blendingBackground}></div>
            <img ref={orb} src={clouds} alt="decorative clouds" className={styles.orb1} />
          </div>
        </div>
      </section>
      <div ref={logo} className={styles.bottomCenter}>
        <LoopingText text="ACTIVE MEDIA" duration={1000} />
        <LoopingText text="A.M INDUSTRIES" duration={1000} />
      </div>
    </div>
  );
}

export default Home;