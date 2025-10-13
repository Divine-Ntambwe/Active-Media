import React, { useEffect, useRef } from 'react'
import styles from './Cloud_Based_Solutions.module.css'

import serverStack from '../assets/Untitled/https_/lottiefiles.com/animations/computerztech-lhmk6qciBg.png'
import backgroundElement from '../assets/Frame 77.png'

function Cloud_Based_Solutions() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add(styles.fadeIn);
            section.classList.remove(styles.fadeOut);
          } else {
            section.classList.remove(styles.fadeIn);
            section.classList.add(styles.fadeOut);
          }
        });
      },
      { threshold: 0.3 } // adjust sensitivity
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.serverImageContainer}>
            <img src={serverStack} alt="Server stack" className={styles.serverImage} />
          </div>
          <h1 className={styles.title}>CLOUD-BASED</h1>
          <h1 className={styles.title2}>SOLUTIONS</h1>
        </div>

        <div className={styles.right}>
          <div className={styles.textContent}>
            <p className={styles.description}>Whether you want to move your</p>
            <p className={styles.description}>current solutions to the cloud or</p>
            <p className={styles.description}>develop <br /> a new project from scratch, we got</p>
            <p className={styles.description}>you covered.</p>
          </div>
          <img src={backgroundElement} alt="decorative element" className={styles.backgroundDecor} />
        </div>
      </div>
    </section>
  )
}

export default Cloud_Based_Solutions
