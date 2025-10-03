import React from 'react'
import styles from './Home.module.css'
import Navbar from "../component/Navbar"

import blending from "../assets/Active_M.jpg"
import clouds from "../assets/Clouds 2.png"
import { useNavigate } from 'react-router-dom'

function Home() {
  const nav = useNavigate()
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

          <button onClick={()=>{nav("/software")}} className={styles.cta} aria-label="Our Services">
            Our Services <span className={styles.arrow}>›</span>
          </button>
        </div>

        <div className={styles.right}>
          
          <div className={styles.blendingBackground}></div>
          <img src={clouds} alt="decorative clouds" className={styles.orb1} />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home
