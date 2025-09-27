import React from 'react'
import styles from './Cloud_Based_Solutions.module.css'
import Navbar from '../component/Navbar'

// Import assets that best match the design
import serverStack from '../assets/Untitled/https_/lottiefiles.com/animations/computerztech-lhmk6qciBg.png'
import swirl from '../assets/blending 1755804129410.png'
import backgroundElement from '../assets/Frame 77.png'

function Cloud_Based_Solutions() {
  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.serverImageContainer}>
              <img src={serverStack} alt="Server stack" className={styles.serverImage} />
            </div>
            <h1 className={styles.title}>
              CLOUD-BASED<br />
              </h1>
              <h1 className={styles.title2}>
              SOLUTIONS
            </h1>
          </div>

          <div className={styles.right}>
            <div className={styles.textContent}>
              <p className={styles.description}>
                Whether you want to move your 
                </p>
                <p className={styles.description}>
                current solutions to the cloud or
                </p>
                 <p className={styles.description}>
                 develop <br />
                a new project from scratch, we got
                </p>
                <p className={styles.description}>
                 you covered.
              </p>
            </div>
            
            {/* Background decorative elements */}
            <img src={swirl} alt="decorative swirl" className={styles.swirl} />
            <img src={backgroundElement} alt="decorative element" className={styles.backgroundDecor} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Cloud_Based_Solutions