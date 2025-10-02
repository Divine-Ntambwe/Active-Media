import React from 'react'
import styles from './Home.module.css'
import Navbar from "../component/Navbar"

import blending from "../assets/blending 1755804129410.png"
import clouds from "../assets/Clouds 2.png"

// Import the looping decrypt/encrypt text
import LoopingText from "../component/LoopingText"

function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={styles.title}>
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

            <button className={styles.cta} aria-label="Our Services">
              Our Services <span className={styles.arrow}>›</span>
            </button>
          </div>

          <div className={styles.right}>
            <img src={blending} alt="decorative blend" className={styles.swirl} />
            <img src={clouds} alt="decorative clouds" className={styles.orb1} />
          </div>
        </div>
      </section>

      {/* 🔑 Bottom center decrypt/encrypt looping text */}
      <div className={styles.bottomCenter}>
        <LoopingText text="ACTIVE MEDIA" duration={1000} />
        <LoopingText text="A.M INDUSTRIES" duration={1000} />
      </div>
    </div>
  )
}

export default Home
