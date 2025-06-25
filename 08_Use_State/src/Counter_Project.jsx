import React, { useState } from "react";

const Counter_Project = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    setCount(count - 1);
  };

  const hadleRestart = () => {
    setCount(0);
  };

  return (
    <>
      <h1 className="counter">{count}</h1>
      <div className="kali">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
        <button onClick={hadleRestart}>Reset</button>
      </div>
    </>
  );
};

export default Counter_Project;
