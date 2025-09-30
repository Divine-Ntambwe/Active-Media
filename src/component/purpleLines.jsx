import React, { useEffect, useState } from "react";
import "./purpleLines.css";
import blendingImage from "../assets/blending 1755804129410.png"; 

const BackgroundLines = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const step = Math.floor(scrollY / 250) % 4; // changes position every 250px
      setPosition(step);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="background-container">
      
      <div className={`image-placeholder position-${position}`}>
        <img src={blendingImage} alt="Blending" />
      </div>
    </div>
  );
};

export default BackgroundLines;
