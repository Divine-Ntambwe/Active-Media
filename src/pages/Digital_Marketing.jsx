import React, { useEffect, useRef, useState } from 'react'
import styles from './Digital_Marketing.module.css'
const Digital_Marketing = () => {
    const [lastY, setLastY] = useState(0);
    const [index,setIndex] = useState(0)
    const BGImg = useRef()
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY) {
        BGImg.current.style.top = "200px"
      
      }
      else {
      console.log("up");
      BGImg.current.style.top = "-200px"
      setLastY(y);
     
    }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);
    return (
    <div className={styles.container}>
                <img ref={BGImg} className={styles.digitalBackground} src="./backgroundLines.png"/>
      <h1 className={styles.heading}>
        GRAPHIC DESIGN &<br />
        DIGITAL MARKETING
      </h1>
      
      <div className={styles.paragraphs}>
        <p>
          We help businesses express the benefits of their products and services in an attractive, compact and 
          concise way through colorful brochures, descriptive flyers, eye-catching advertisements etc.
        </p>
        
        <p>
          We have the experience and tools to help you build your brand or business. Having an eye catching 
          custom logo, business cards, letterheads and any branding can increase both online and offline 
          presence of your business substantially. Work with creative individuals to build your brand through 
          custom, memorable design.
        </p>
      </div>
    </div>
  )
}

export default Digital_Marketing
