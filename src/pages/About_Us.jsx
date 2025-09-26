import React from 'react'
import styles from './About_Us.module.css'
import "@fontsource/inter/300.css"

function About_Us() {
  return (
    <div>
      {/* Ozias Framework (the start) */}
      <div className={styles.conatiner}>
        <div className={styles.text}>
        
        </div>
          <div className={styles.lightimage}>

        </div>

      </div>
        <div className={styles.conatiner2}>
          <div className={styles.text2}>
            <img src="/src/assets/Frame 201.png" alt="PhoneImage" className={styles.image1} />

          </div>
            <div className={styles.phoneimage}>
              <h1 className={styles.title}>Solutions</h1>
                <p className={styles.paragraph}>
                We aim to provide each individual service to a whole host of industries.
                Our expertise allow us to fully customise each</p>
                <p className={styles.paragraph2}>product work for every individual business model
                 - providing a strong foundation with which any business can begin</p>
                <p className={styles.paragraph3}>to maximise on their potential.</p>
              <button className={styles.experties}>Experties</button>
        </div>
        </div>
      {/* Ozias Framework (The End) */}
    </div>
  )
}

export default About_Us