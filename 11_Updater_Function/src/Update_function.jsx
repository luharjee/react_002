import React, { useState } from "react";

const Update_function = () => {
  const [count, setCount] = useState(0);

  const hadleAddCount = () => {
    // Use the current state to calculate the next state
    // set the functions do not trigger an update
    // React batches together state update for performance reasons
    // Next state become the current state after an update

    // Takes the pending state to calculate the NEXT state
    // React puts your updater functions in a queue(waiting in line)
    // During the next render , it will call them in same order
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const handleSubCount = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const handleResetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1> Count : {count}</h1>
      <button onClick={hadleAddCount}>Increment</button>
      <button onClick={handleSubCount}>Decrement</button>
      <button onClick={handleResetCount}>Reset</button>
    </div>
  );
};

export default Update_function;
