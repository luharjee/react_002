import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Green");

  useEffect(() => {
    document.title = `count : ${count} ${color}`;
  }, [count, color]);

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const subCount = () => {
    setCount((c) => c - 1);
  };

  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };

  return (
    <div>
      <h1 style={{ color: color }}>Count : {count}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default UseEffect;
