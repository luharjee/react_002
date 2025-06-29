// useState() : Re- renders the components when the state value changes

// UseRef() : "Use References" Doesnot cause re-renders when its value changes.
// when you want a component to "remember" some information, but you don't want that information to trigger new renders.

// 1 . Accessing / Interchanging with DOM elements
// 2. Handling Focus , Animation, and Transitions
// 3. Managing Timers and intervals

import React, { useEffect, useRef } from "react";

const App = () => {
  const inputRef1 = useRef("Rosi");
  const inputRef2 = useRef("Rahul");
  const inputRef3 = useRef("Kali");

  const handleClick1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
  };

  const handleClick2 = () => {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "red";
  };

  const handleClick3 = () => {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "green";
  };

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });
  return (
    <div>
      <button onClick={handleClick1}>Click Me1!</button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click Me2!</button>
      <input ref={inputRef2} />

      <button onClick={handleClick3}>Click Me3!</button>
      <input ref={inputRef3} />
    </div>
  );
};

export default App;
