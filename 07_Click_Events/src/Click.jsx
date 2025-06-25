// click event = An interaction when a user click on a specific element. we can respond to clicks by passing a callback to the onclick event handler.

import React from "react";

const Click = () => {
  const handleClick = (e) => {
    e.target.textContent = "OOUCH!";
  };

  //   let count = 0;

  //   const handleClick = (name) => {
  //     if (count < 3) {
  //       count++;
  //       console.log(`${name} clicked me ${count} times`);
  //     } else {
  //       console.log(`${name} stop clicking me`);
  //     }
  //   };

  //   const handleClick2 = (name) => {
  //     console.log(`${name} stop clicking me!!!`);
  //   };

  return (
    <div>
      <button onDouble Click={(e) => handleClick(e)}>
        click me!
      </button>
    </div>
  );
};

export default Click;
