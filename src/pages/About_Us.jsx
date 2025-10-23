import React, { useRef, useEffect, useState } from "react";
import styles from "./About_Us.module.css";
import lightImg from "../assets/Frame 206.png";
import MultiMedia from "../assets/Multimedia.png";
import PurpleLines from "../component/purpleLines.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar.jsx";

export default function About_Us() {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isScrolling = useRef(false);
  const purpleLines = useRef();
  const slidesCount = 4;
  const nav = useNavigate()

  useEffect(() => {
    let scrollAccumulator = 0; 

  const handleWheel = (e) => {
    e.preventDefault(); 

    if (isScrolling.current) return;

    scrollAccumulator += e.deltaY;

    // Change slide only after a certain scroll distance
    const scrollThreshold = 200; 

    if (scrollAccumulator > scrollThreshold) {
      setCurrentSlide((prev) => Math.min(slidesCount - 1, prev + 1));
      scrollAccumulator = 0;
      isScrolling.current = true;
      setTimeout(() => (isScrolling.current = false), 700);
    } else if (scrollAccumulator < -scrollThreshold) {
      setCurrentSlide((prev) => Math.max(0, prev - 1));
      scrollAccumulator = 0;
      isScrolling.current = true;
      setTimeout(() => (isScrolling.current = false), 700);
    }
  };

  window.addEventListener("wheel", handleWheel, { passive: false });
  return () => window.removeEventListener("wheel", handleWheel);
}, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const offset = -currentSlide * window.innerWidth;
    containerRef.current.style.transform = `translateX(${offset}px)`;

    const slides = containerRef.current.querySelectorAll(`.${styles.aboutDiv}`);
    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add(styles.active);
      } else {
        slide.classList.remove(styles.active);
      }
    });
    switch (currentSlide){
      case 0 : purpleLines.current.style.left = "-250px"
      purpleLines.current.style.top = "0px"
      return;
      case 1: { 
        purpleLines.current.style.left = "200px"
      purpleLines.current.style.top = "-250px"
      return
    }
      case 2: purpleLines.current.style.top = "-50px"
      return

      case 3: nav("/software")
    }

  }, [currentSlide]);

  return (
    <>
      <Navbar/>
    <section className={styles.aboutSection}>
      {/* PurpleLines always behind everything */}
      <div className={styles.purpleLinesWrapper} ref={purpleLines}>
        <PurpleLines />
      </div>

      {/* Slides container */}
      <div className={styles.slidesContainer} ref={containerRef}>
        {/* Slide 1 */}
        <div className={`${styles.aboutDiv} ${styles.div1}`}>
          <div className={`${styles.laptopWrapper} ${styles.fadeInStagger}`}>
            <img src="/laptop.png" alt="Laptop" className={styles.laptop} />
          </div>
          <h2 className={`${styles.heading} ${styles.fadeInStagger}`}>
            WHO ARE WE ?
          </h2>
          <p className={`${styles.textBlock} ${styles.topLeft} ${styles.fadeInStagger}`}>
            We are a software development and <br />
            media agency that focuses on <br />
            business growth
          </p>
          <p className={`${styles.textBlock} ${styles.bottomLeft} ${styles.fadeInStagger}`}>
            Active Media consists <br /> of a team of people <br />
            that are passionate <br /> about what they do <br />
            and strive to ensure <br />
            that only the very best <br />
            service is offered to <br /> our clients.
            <br />
            We stand by our company ethics <br />– ensuring honesty, <br />
            authenticity and excellence. <br />
            You have ideas. We have software solutions.
          </p>
          <p className={`${styles.textBlock} ${styles.rightBlock} ${styles.fadeInStagger}`}>
            Active Media is a premier multimedia solution company <br />
            with innovative and distinctive solutions <br />
            that go beyond the traditional means of marketing. <br />
            Great business needs great software
          </p>
        </div>

        {/* Slide 2 */}
        <div className={`${styles.aboutDiv} ${styles.div2}`}>
          <div className={`${styles.containerB} ${styles.fadeInStagger}`}>
            {/* Top Section */}
            <div className={`${styles.aimSection} ${styles.fadeInStagger}`}>
              <div className={styles.bigText}>
                WE ARE A SOFTWARE <br />
                DEVELOPMENT AND MEDIA <br />
                AGENCY THAT FOCUSES ON <br />
                BUSINESSES GROWTH.
              </div>
              <div className={styles.aimParagraph}>
                We aim to provide each individual service <br />
                to a whole host of industries. Our <br />
                expertise allows us to fully customise <br />
                each product to work for every individual <br />
                business model - providing a strong <br />
                foundation with which any business can <br />
                begin to maximise on their potential.
              </div>
            </div>

            {/* Multimedia + Software section */}
            <div className={`${styles.SoftwareSection} ${styles.fadeInStagger}`}>
              <div className={styles.mediaImageDiv}>
                <img
                  src={MultiMedia}
                  alt="Multimedia"
                  className={styles.mediaImage}
                />
              </div>

              <div className={styles.mediaContent}>
                <div className={styles.multimedia}><b>Multimedia</b></div>
                <div className={styles.multimediaParagraph}>
                  Active Media is a premier multimedia solution company with
                  innovative and distinctive solutions that go beyond the
                  traditional means of marketing. Great business needs great
                  software.
                </div>
                <div className={styles.software}>Software</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className={`${styles.aboutDiv} ${styles.div3}`}>
          <div className={`${styles.container1} ${styles.fadeInStagger}`}>
            <div className={styles.text}>
              <h5>Team</h5>
              <p className={styles.teamText}>
                Active Media consists of a team of <br />
                people that are passionate about what <br />
                they do and strive to ensure that only <br />
                the very best service is offered to our <br />
                clients.
                <br />
                We stand by our company ethics – ensuring honesty, authenticity and
                excellence.
                <br />
                You have ideas. We have software solutions
              </p>
              <p className={styles.passionate}>Passionate</p>
            </div>
            <div className={styles.lightimage}>
              <img src={lightImg} alt="LightBulb" />
            </div>
          </div>

          <div className={`${styles.container1} ${styles.fadeInStagger}`}>
            <div className={styles.phoneImage}>
              <img
                src="/src/assets/Frame 201.png"
                alt="Phone"
                className={styles.image1}
              />
            </div>
            <div className={styles.text2}>
              <h1 className={styles.title}>Solutions</h1>
              <p className={styles.paragraph}>
                We aim to provide each individual service to a whole host of
                industries.
                <br />
                Our expertise allows us to fully customise each product to work
                for every individual business model - providing a strong
                foundation with which any business can begin to maximise on their
                potential.
              </p>
              <button className={styles.experties}>Expertise</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
