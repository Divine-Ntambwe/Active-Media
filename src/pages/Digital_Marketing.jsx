import React, { useEffect, useRef, useState } from 'react'
import styles from './Digital_Marketing.module.css'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
const Digital_Marketing = () => {
    const [lastY, setLastY] = useState(0);
    const [index,setIndex] = useState(0)
    const BGImg = useRef();
    const heading = useRef();
    const par = useRef();
    const container = useRef();
    const wrapper = useRef()
    const lastFour = useRef()
    const firstTwo = useRef()
    let num = 0
    function onScroll(){
      console.log(document.documentElement.scrollTop)

    const y = window.scrollY;
      if (document.documentElement.scrollTop > 0) {
        BGImg.current.style.top = "100px"
        heading.current.style.animationPlayState = "running"
        heading.current.style.animationFillMode = "forwards"

        par.current.style.animationPlayState = "running"
        par.current.style.animationFillMode = "forwards"

        wrapper.current.style.animationPlayState = "running"
        wrapper.current.style.animationFillMode = "forwards"
        
      }

      if (document.documentElement.scrollTop > 105){
           BGImg.current.style.left = "700px"

         lastFour.current.style.animationPlayState = "running"
         lastFour.current.style.animationFillMode = "forwards"

         firstTwo.current.style.animationPlayState = "running"
         firstTwo.current.style.animationFillMode = "forwards"
        
         
    
      }
      if (document.documentElement.scrollTop == 0){
       firstTwo.current.style.animationFillMode = "backwards"
       lastFour.current.style.animationFillMode = "backwards"
       wrapper.current.style.animationFillMode = "backwards"
       heading.current.style.animationFillMode = "backwards"
       par.current.style.animationFillMode = "backwards"
    }
  }
    
    useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
    return (
    <div ref={container} className={styles.container}>
        <img ref={BGImg} className={styles.digitalBackground} src="./backgroundLines.png"/>
      <h1 ref={heading} >
        GRAPHIC DESIGN &<br />
        DIGITAL MARKETING
      </h1>

      <div ref={par} className={styles.paragraphs}>
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
      </div>  

    <div ref={wrapper} className={styles.wrapper}>
      {/* Card 1 */}
      <div ref={firstTwo} className={styles.firstTwo}>

      <div className={styles.cardOne}>
        <img src="src\assets\Group 30.png"/>
      </div>

      {/* Card 2 */}
      <div className={styles.cardTwo}>
           <img src="src\assets\Group 36.png"/>
      </div>
      </div>

      <div ref={lastFour} className={styles.lastFour}>

      <div className={styles.cardThree}>
        <img src="src\assets\Group 43.png"/>
      </div>

      <div className={styles.cardFour}>
           <img src="src\assets\Group 42.png"/>
      </div>

      {/* Card 4 */}
      <div className={styles.cardFive}>
           <img src="src\assets\Group 39.png"/>
      </div>

         {/* Card 5 */}
      <div className={styles.cardSix}>
        <img src="src\assets\Group 40.png"/>
      </div>
      </div>

       {/* Card 6 */}
    </div>

     {/* Card 3 */}
      
    </div>
  );
};

export default Digital_Marketing;
