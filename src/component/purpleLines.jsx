import React from "react";
import "./purpleLines.css";
import blendingImage from "../assets/blending 1755804129410.png";

export default function PurpleLines({ slideIndex }) {
  // Move background slightly for each slide
  const offsetX = slideIndex * -100; // tweak this for how much it shifts
  const offsetY = slideIndex * 30;   // optional vertical shift

  return (
    <div className="background-container">
      <div
        className="image-placeholder"
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
        }}
      >
        <img src={blendingImage} alt="Blending" />
      </div>
    </div>
  );
}
