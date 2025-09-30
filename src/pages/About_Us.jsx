import React, { useEffect, useRef } from "react";
import styles from "./About_Us.module.css";
import PurpleLines from "../component/PurpleLines"; 

export default function About_Us() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;

      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight; // 1 viewport height
      const progress = Math.min(scrollY / maxScroll, 1); // clamp 0–1

      // Move diagonally down-left as you scroll
      const translateX = -300 * progress;
      const translateY = 300 * progress;

      // Fade out towards the end
      const opacity = 1 - progress;

      bgRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
      bgRef.current.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ABOUT SECTION */}
      <section className={styles.aboutSection}>
        {/* Background Lines */}
        <div className={styles.bgLinesWrapper}>
          <PurpleLines />
          <img
            ref={bgRef}
            src="/laptop.png"
            alt="Laptop"
            className={styles.bgLines}
            draggable={false}
          />
        </div>

        {/* Heading */}
        <h2 className={styles.heading}>WHO ARE WE ?</h2>

        {/* Left top paragraph */}
        <p className={`${styles.textBlock} ${styles.topLeft}`}>
          We are a software development and <br />
          media agency that focuses on <br />
          business growth
        </p>

        {/* Left bottom paragraph */}
        <p className={`${styles.textBlock} ${styles.bottomLeft}`}>
          Active Media consists <br /> of a team of people <br />
          that are passionate <br />about what they do <br />
          and strive to ensure <br />that only the very best <br />
          service is offered to <br />our clients. 
          We stand <br /> by our company ethics <br />– ensuring honesty, <br />
          authenticity and <br /> excellence. 
          You have <br />ideas. We have <br /> software solutions.
        </p>

        {/* Right paragraph */}
        <p className={`${styles.textBlock} ${styles.rightBlock}`}>
          Active Media is a premier multimedia solution company <br />
          with innovative and distinctive solutions <br />
          that go beyond the traditional means of marketing. <br />
          Great business needs great software
        </p>
      </section>

      {/* EXTRA SLIDE SECTIONS */}
      <section className={`${styles.slideSection} ${styles.fromLeft}`}>
       <div className={styles.contentWrapper}>

       </div>
      </section>

      <section className={`${styles.slideSection} ${styles.fromRight}`}>
        <h2>Our Vision</h2>
        <p>
          We envision software as the core driver of innovation and growth.
        </p>
      </section>

      <section className={`${styles.slideSection} ${styles.fromLeft}`}>
        <h2>Contact Us</h2>
        <p>
          Ready to collaborate? Let's create something powerful together.
        </p>
      </section>
    </>
  );
}
