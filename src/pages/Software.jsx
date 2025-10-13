import React, { useEffect, useState } from "react";
import styles from "./Software.module.css";
import PurpleLines from "../component/purpleLines"; 
import laptopImage from "../assets/lottiefiles.com/animations/computerztech-lhmk6qciBg.png";
import ECommercePage from "./ECommercePage";
import Cloud_Based_Solutions from "./Cloud_Based_Solutions";

export default function Software() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // when you scroll past 100px, hide first slide
      if (scrollY > window.innerHeight * 0.3) {
        setShowFirst(false);
      } else {
        setShowFirst(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.softwareSection}>
      {/* Slide 1 */}
      <div className={`${styles.slide} ${styles.div1} ${showFirst ? styles.active : styles.fadeOutSection}`}>
        <PurpleLines />
        <div className={styles.textBlock}>
          <h1 className={`${styles.title} ${showFirst ? styles.fadeIn : styles.fadeOut}`}>
            Software <br /> Development
          </h1>

          <div className={`${styles.services} ${showFirst ? styles.fadeIn : styles.fadeOut}`}>
            <p>WEB</p>
            <p>DESIGN</p>
            <p>HOSTING</p>
          </div>
        </div>

        <div className={styles.laptopWrapper}>
          <img
            src={laptopImage}
            alt="Laptop"
            className={`${styles.laptopImage} ${showFirst ? styles.laptopFadeIn : styles.laptopFadeOut}`}
          />
        </div>

        <div className={`${styles.paragraphBox} ${showFirst ? styles.fadeIn : styles.fadeOut}`}>
          <p>
            With The Rapid Move of Technology, <br />
            Active Media Has Ensured That Only <br />
            The Latest In Technology Is Used In <br />
            Website Development.
          </p>
        </div>
      </div>

      {/* Slide 2 (Cloud-Based Solutions) */}
      <div className={`${styles.slide} ${styles.div2} ${!showFirst ? "fadeIn" : ""}`}>
        <Cloud_Based_Solutions />
      </div>

      {/* Slide 3 */}
      <div className={`${styles.slide} ${styles.div3}`}>
        <ECommercePage />
      </div>
    </section>
  );
}
