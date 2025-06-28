import React, { useState, useEffect } from "react";

const UseEffect1 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const [height, setHeight] = useState(window.innerHeight);

  const handleSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    console.log("Event Listener Added");

    return () => {
      window.removeEventListener("resize", handleSize);
      console.log("Event Listener Removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size : ${width} x ${height}`;
  }, [width, height]);

  return (
    <div>
      <p>Window Width : {width}px</p>
      <p>Window Height : {height}px</p>
    </div>
  );
};

export default UseEffect1;
