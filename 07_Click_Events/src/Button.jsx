import React from "react";

const Button = () => {
  const handleClick = (e) => {
    console.log("Mardiya");
    console.log(e);
    e.target.textContent = "Mardiya, ...SUBSCRIBED...";
  };

  return (
    <div>
      <button
        onDoubleClick={(e) => {
          handleClick(e);
        }}
      >
        Maro Like, Share, Subscribe
      </button>
    </div>
  );
};

export default Button;
