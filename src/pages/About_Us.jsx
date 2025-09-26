import React from 'react'
import styles from './About_Us.module.css'
import lightImg from '../assets/Frame 206.png'; 
import "@fontsource/inter/300.css"

function About_Us() {
  return (
    <div>
      {/* Carmel Framework (the start) */}
      <div className={styles.conatiner}>
        <div className={styles.text}>
        <h5>Team</h5>
        <p className={styles.teamText}>
        Active Media consists of a team of<br></br>
        people that are passionate about what<br></br>   
        they do and strive to ensure that only only the<br></br>
        very best service is offered to our <br></br>
        clients. We stand by our company ethics<br></br>
        -ensuring honesty, authenticity and <br></br>
        excellence. You have ideas. We have <br></br>
        software solutions</p>
          <p className={styles.passionate}>Passionate</p>
        </div>
          <div className={styles.lightimage}>
            <img src={lightImg} alt="LightBulb" />

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