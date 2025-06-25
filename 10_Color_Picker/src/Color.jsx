import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="Baap">
      <h1>Color Picker</h1>

      <p>Color : {color}</p>
      <br />
      <div className="color-container" style={{ backgroundColor: color }}></div>
      <br />
      <br />
      <label>
        Select a Color :
        <br />
        <br />
        <input type="color" value={color} onChange={handleColorChange} />
      </label>
    </div>
  );
};

export default Color;
