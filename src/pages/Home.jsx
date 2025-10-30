import React, { useEffect, useRef } from 'react'
import styles from './Home.module.css'
import Navbar from "../component/Navbar"

import blending from "../assets/Active_M.jpg"
import clouds from "../assets/Clouds 2.png"
import { useNavigate } from 'react-router-dom'

// Import the looping decrypt/encrypt text
import LoopingText from "../component/LoopingText"

function Home() {
  const nav = useNavigate()
  const title = useRef(),
  button = useRef(),
  orb = useRef(),
  bgImg = useRef(),
  logo = useRef();
  function handleNav(){
    title.current.classList.add(styles.slideOut)
    orb.current.classList.add(styles.slideOut)
    button.current.classList.add(styles.slideOut)
    bgImg.current.classList.add(styles.fadeOut)
    logo.current.classList.add(styles.fadeOut)
  }

  function onScroll(){
    handleNav()
    setTimeout(()=>{nav("/about-us")},1200)
  }

    useEffect(() => {
  const abortController = new AbortController();
  const signal = abortController.signal;

  const handleWheel = (e) => {
    if (e.deltaY > 0) onScroll();
  };

  let touchStartY = 0;
  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
  };
  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY - touchEndY;
    if (diffY > 50) onScroll(); // swipe up
  };

  window.addEventListener("wheel", handleWheel, { passive: false, signal });
  window.addEventListener("touchstart", handleTouchStart, { passive: true, signal });
  window.addEventListener("touchend", handleTouchEnd, { passive: true, signal });

  return () => {
    abortController.abort(); // removes all listeners
  };
}, []);
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

          <button ref={button} onClick={()=>{handleNav(); setTimeout(()=>{nav("/software")},1900)}} className={styles.cta} aria-label="Our Services">
            Our Services <span className={styles.arrow}>›</span>
          </button>
        </div>

        <div className={styles.right}>
          <div ref={bgImg}className={styles.blendingBackground}></div>
          <img ref={orb} src={clouds} alt="decorative clouds" className={styles.orb1} />
        </div>

      </div>
      </section>

      {/* 🔑 Bottom center decrypt/encrypt looping text */}
      <div ref={logo} className={styles.bottomCenter}>
        <LoopingText text="ACTIVE MEDIA" duration={1000} />
        <LoopingText text="A.M INDUSTRIES" duration={1000} />
      </div>
    </div>
  )
}

export default Home
