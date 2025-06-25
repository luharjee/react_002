import React from "react";

const Food = () => {
  const food1 = "Mango";
  const food2 = "Banana";

  return (
    <div>
      <ul>
        <li>Apple</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
      </ul>
      <hr />
    </div>
  );
};

export default Food;
