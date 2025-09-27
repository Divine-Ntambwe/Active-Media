import React, { useEffect, useRef, useState } from 'react'
import styles from './Digital_Marketing.module.css'

function Digital_Marketing() {
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
    <div style={{border:"1px solid brown"}}className='digital-marketing'>
        <img ref={BGImg} className={styles.digitalBackground} src="./backgroundLines.png"/>
      
    </div>
  )
}

export default Digital_Marketing