import React, { useState, useRef } from "react";
import styles from "./Software.module.css";
import laptopImage from "../assets/lottiefiles.com/animations/computerztech-lhmk6qciBg.png";

export default function Software() {
  const [laptopClicked, setLaptopClicked] = useState(false);
  const sectionRef = useRef(null);

  const handleLaptopClick = () => {
    setLaptopClicked(true);

    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => setLaptopClicked(false), 800);
    }, 700);
  };

  return (
    <section className={styles.softwareSection}>
      {/* Background lines */}
      <img
        src="/backgroundLines.png"
        alt="Background lines"
        className={styles.lines}
      />

      {/* Left text */}
      <div className={styles.textBlock}>
        <h1 className={styles.title}>
          Software <br /> Development
        </h1>
        <div className={styles.services}>
          <p>WEB</p>
          <p>DESIGN</p>
          <p>HOSTING</p>
        </div>
      </div>

      {/* Laptop PNG */}
      <div
        className={`${styles.laptopWrapper} ${
          laptopClicked ? styles.laptopClicked : ""
        }`}
        onClick={handleLaptopClick}
      >
        <img src={laptopImage} alt="Laptop" className={styles.laptopImage} />
      </div>

      {/* Paragraph box */}
      <div ref={sectionRef} className={styles.paragraphBox}>
        <p>
          With The Rapid Move of Technology, <br />
          Active Media Has Ensured That Only <br />
          The Latest In Technology Is Used In <br />
           Website Development.
        </p>
      </div>
    </section>
  );
}
