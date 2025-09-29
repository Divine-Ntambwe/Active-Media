import React from "react";
import styles from "./Digital_Marketing.module.css";


const Digital_Marketing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        GRAPHIC DESIGN &<br />
        DIGITAL MARKETING
      </h1>

      <div className={styles.paragraphs}>
        <p>
          We help businesses express the benefits of their products and services
          in an attractive, compact and concise way through colorful brochures,
          descriptive flyers, eye-catching advertisements etc.
        </p>

        <p>
          We have the experience and tools to help you build your brand or
          business. Having an eye-catching custom logo, business cards,
          letterheads and any branding can increase both online and offline
          presence of your business substantially. Work with creative
          individuals to build your brand through custom, memorable design.
        </p>

    <div className={styles.wrapper}>
      {/* Card 1 */}
      <div className={styles.cardOne}>
        <div className={styles.iconBox}>
        </div>
        <h2 className={styles.title}>Logo Design</h2>
        <p className={styles.text}>
          We create unique symbols that represent your brand and leave a
          lasting impression.
        </p>
        <ul className={styles.list}>
          <li>Brand Identity</li>
          <li>Custom Concepts</li>
          <li>Memorable Design</li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className={styles.cardTwo}>
        <div className={styles.iconBox}>
        </div>
        <h2 className={styles.title}>Letterhead Design</h2>
        <p className={styles.text}>
          Professional letterheads that reflect your brand's identity.
        </p>
        <ul className={styles.list}>
          <li>Clean Layouts</li>
          <li>Branded Look</li>
          <li>Print Ready</li>
        </ul>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Digital_Marketing;
