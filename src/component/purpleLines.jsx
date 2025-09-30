import React, { useEffect, useState } from "react";
import "./purpleLines.css";
import blendingImage from "../assets/blending 1755804129410.png"; // ✅ imported image

const BackgroundLines = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const step = Math.floor(scrollY / 300) % 4; // ✅ changes every 300px scroll
      setPosition(step);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="background-container">
      {/* ✅ background lines that shift on scroll */}
      <div className={`lines position-${position}`} />

      {/* ✅ small image that stays centered once */}
      <div className="image-placeholder">
        <img src={blendingImage} alt="Blending" />
      </div>
    </div>
  );
};

export default BackgroundLines;
