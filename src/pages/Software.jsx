import React from "react";
import styles from "./Software.module.css";
import PurpleLines from "../component/purpleLines"; 
import laptopImage from "../assets/lottiefiles.com/animations/computerztech-lhmk6qciBg.png";

export default function Software() {
  return (
    <section className={styles.softwareSection}>
      {/* Slide 1 */}
      <div className={`${styles.slide} ${styles.div1}`}>
        <PurpleLines />
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

        <div className={styles.laptopWrapper}>
          <img src={laptopImage} alt="Laptop" className={styles.laptopImage} />
        </div>

        <div className={styles.paragraphBox}>
          <p>
            With The Rapid Move of Technology, <br />
            Active Media Has Ensured That Only <br />
            The Latest In Technology Is Used In <br />
            Website Development.
          </p>
        </div>
      </div>

      {/* Slide 2 */}
      <div className={`${styles.slide} ${styles.div2}`}>
        <p>cloud based solutions </p>
        {/* Ozias(start) */}
        <div className={styles.div2_2}>
            <img src="/src/assets/Frame 78.png" alt="" />
        <div className={styles.div2_3}>
            <img src={laptopImage} alt="" className={styles.laptop} />
        </div>
            </div>
        {/* Ozias(End) */}
      </div>

      {/* Slide 3 */}
      <div className={`${styles.slide} ${styles.div3}`}>
        <p>e-commerce</p>
      </div>

      {/* Slide 4 */}
      <div className={`${styles.slide} ${styles.div4}`}></div>
      
      {/* Carmel Software */}
      <div className={styles.ecommerce}>

      </div>
    </section>
  );
}
