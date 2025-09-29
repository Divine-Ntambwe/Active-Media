import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import styles from "./About_Us.module.css";

import lightImg from "../assets/Frame 206.png";
import phoneImg from "../assets/Frame 201.png"; 
import "@fontsource/inter/300.css";

const positions = [
  { x: "0%", y: "0%" }, // center
  { x: "40%", y: "-40%" }, // top right
  { x: "40%", y: "40%" }, // bottom right
  { x: "-40%", y: "40%" }, // bottom left
  { x: "-40%", y: "-40%" } // top left
];

export default function About_Us() {
  const [posIndex, setPosIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);
  const panelsRef = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const scrollValue = window.scrollY || window.pageYOffset || 0;
      const newIdx = Math.floor(scrollValue / 100) % positions.length;
      setPosIndex(newIdx >= 0 ? newIdx : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index || 0);
            setSectionIndex(idx);
          }
        });
      },
      { root: null, threshold: 0.6 }
    );

    panelsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linesX = sectionIndex === 0 ? positions[posIndex].x : "60%";
  const linesY = sectionIndex === 0 ? positions[posIndex].y : "40%";

  const laptopAnim =
    sectionIndex === 0
      ? { x: "-25%", y: "10%", opacity: 1 }
      : { x: "-95%", y: "40%", opacity: 0.11 };

  return (
    <section className={styles.aboutSection}>
      {/* animated background lines */}
      <motion.img
        src="/backgroundLines.png"
        alt="Background lines"
        className={styles.lines}
        animate={{ x: linesX, y: linesY }} // ✅ FIXED
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      {/* laptop */}
      <motion.div
        className={styles.laptopWrapper}
        animate={laptopAnim}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        aria-hidden
      >
        <img src="/laptop.png" alt="Laptop with bubbles" draggable={false} />
      </motion.div>

      {/* panels container */}
      <div className={styles.panelsWrapper}>
        {/* Panel 0 */}
        <section
          className={styles.panel}
          ref={(el) => (panelsRef.current[0] = el)}
          data-index={0}
        >
          <motion.div
            className={styles.textPanelInner}
            animate={{ x: sectionIndex === 0 ? "0%" : "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className={styles.blockTopLeft}>
              <h2 className={styles.heading}>WHO ARE WE?</h2>
              <p className={styles.blockText}>
                We are a software development and <br />
                media agency that focuses on <br />
                business growth.
              </p>
            </div>

            <div className={styles.blockBottomLeft}>
              <p className={styles.blockText}>
                Active Media consists <br />
                of a team of people <br />
                passionate about what they do <br />
                and strive to ensure that only the very best <br />
                service is offered to our clients. <br />
                We stand by our company ethics — honesty, authenticity and
                excellence. <br />
                You have ideas. We have software solutions.
              </p>
            </div>

            <div className={styles.blockMiddleRight}>
              <p className={styles.blockText}>
                Active Media is a premier <br />
                multimedia solution company <br />
                with innovative and distinctive <br />
                solutions that go beyond the <br />
                traditional means of marketing. <br />
                Great business needs great software.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Panel 1 */}
        <section
          className={styles.panel}
          ref={(el) => (panelsRef.current[1] = el)}
          data-index={1}
        >
          <motion.div
            className={styles.mediaPanelInner}
            animate={{ x: sectionIndex === 1 ? "0%" : "100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className={styles.container}>
              <div className={styles.text}>
                <h5>Team</h5>
                <p className={styles.teamText}>
                  Active Media consists of a team of
                  <br />
                  people that are passionate about what
                  <br />
                  they do and strive to ensure only the
                  <br />
                  very best service is offered to our
                  <br />
                  clients. We stand by our company ethics
                  <br />
                  — ensuring honesty, authenticity and
                  <br />
                  excellence. You have ideas. We have
                  <br />
                  software solutions.
                </p>
                <p className={styles.passionate}>Passionate</p>
              </div>

              <div className={styles.lightimage}>
                <img src={lightImg} alt="LightBulb" draggable={false} />
              </div>
            </div>

            <div className={styles.container2}>
              <div className={styles.text2}>
                <img
                  src={phoneImg}
                  alt="PhoneImage"
                  className={styles.image1}
                />
              </div>

              <div className={styles.phoneimage}>
                <h1 className={styles.title}>Solutions</h1>
                <p className={styles.paragraph}>
                  We aim to provide each individual service to a whole host of
                  industries. Our expertise allow us to fully customise each
                </p>
                <p className={styles.paragraph2}>
                  product work for every individual business model — providing a
                  strong foundation with which any business can begin
                </p>
                <p className={styles.paragraph3}>
                  to maximise on their potential.
                </p>
                <button className={styles.expertise}>Expertise</button>
              </div>
            </div>

            <div className={styles.circle1}></div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
