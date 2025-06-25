import React from "react";
import profiePic from "./assets/kala.png";

const Card = () => {
  return (
    <div className="rahu">
      <img src={profiePic} alt="" />
      <h2>Rahul Sah</h2>
      <p>I am a student at RGU</p>
    </div>
  );
};

export default Card;
