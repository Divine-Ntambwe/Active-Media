import React, { useRef, useEffect, useState } from "react";
import styles from "./About_Us.module.css";

export default function About_Us() {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isScrolling = useRef(false);

  const slidesCount = 4;

  useEffect(() => {
    const handleWheel = (e) => {
      // If we're past the last slide then allow normal vertical scroll
      if (currentSlide === slidesCount - 1 && e.deltaY > 0) {
        document.body.style.overflowY = "auto"; // enable vertical scroll
        return;
      }

      // Otherwise, intercept scrolling
      e.preventDefault();
      document.body.style.overflowY = "hidden"; // disables vertical scroll while in slides
      if (isScrolling.current) return;
      isScrolling.current = true;

      if (e.deltaY > 0) {
        // scrolling down
        setCurrentSlide((prev) => Math.min(slidesCount - 1, prev + 1));
      } else {
        // scrolling up
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSlide]);

  useEffect(() => {
    if (!containerRef.current) return;
    const offset = -currentSlide * window.innerWidth;
    containerRef.current.style.transform = `translateX(${offset}px)`;
  }, [currentSlide]);

  return (
    <section className={styles.aboutSection} ref={containerRef}>
      {/* Slide 1 */}
      <div
        className={`${styles.aboutDiv} ${styles.div1} ${
          currentSlide === 0 ? styles.active : ""
        }`}
      >
        <div className={styles.laptopWrapper}>
          <img src="/laptop.png" alt="Laptop" className={styles.laptop} />
        </div>
        <h2 className={styles.heading}>WHO ARE WE ?</h2>
        <p className={`${styles.textBlock} ${styles.topLeft}`}>
          We are a software development and <br />
          media agency that focuses on <br />
          business growth
        </p>
        <p className={`${styles.textBlock} ${styles.bottomLeft}`}>
          Active Media consists <br /> of a team of people <br />
          that are passionate <br />about what they do <br />
          and strive to ensure <br />that only the very best <br />
          service is offered to <br />our clients. 
          We stand <br /> by our company ethics <br />– ensuring honesty, <br />
          authenticity and <br /> excellence. 
          You have <br />ideas. We have <br /> software solutions.
        </p>
        <p className={`${styles.textBlock} ${styles.rightBlock}`}>
          Active Media is a premier multimedia solution company <br />
          with innovative and distinctive solutions <br />
          that go beyond the traditional means of marketing. <br />
          Great business needs great software
        </p>
      </div>

      {/* Slide 2 */}
      <div
        className={`${styles.aboutDiv} ${styles.div2} ${
          currentSlide === 1 ? styles.active : ""
        }`}
      ></div>

      {/* Slide 3 */}
      <div
        className={`${styles.aboutDiv} ${styles.div3} ${
          currentSlide === 2 ? styles.active : ""
        }`}
      ></div>

      {/* Slide 4 */}
      <div
        className={`${styles.aboutDiv} ${styles.div4} ${
          currentSlide === 3 ? styles.active : ""
        }`}
      ></div>
    </section>
  );
}
