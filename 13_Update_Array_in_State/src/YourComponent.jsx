import React, { useState } from "react";

const YourComponent = () => {
  const [foods, setFoods] = useState([
    "Orange",
    "PineApple",
    "Banana",
    "Litchi",
  ]);

  const handleAddFood = () => {
    const newFruit = document.querySelector("#fruitId").value;

    document.querySelector("#fruitId").value = "";

    console.log(newFruit);

    setFoods((f) => [...f, newFruit]);
  };

  const handleRemoveFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>List of Fruits</h2>
      <ul>
        {foods.map((fruit, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {fruit}
          </li>
        ))}
      </ul>

      <input type="text" id="fruitId" placeholder="Enter fruit name" />
      <button onClick={handleAddFood}>Add Fruit</button>
    </div>
  );
};

export default YourComponent;
