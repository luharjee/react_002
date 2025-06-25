import React from "react";
import List from "./List";

const App = () => {
  const fruits = [
    { id: 1, name: "Apple", calories: 100 },
    { id: 2, name: "Orange", calories: 120 },
    { id: 3, name: "Banana", calories: 111 },
    { id: 4, name: "Pineapple", calories: 121 },
    { id: 5, name: "Coconut", calories: 89 },
  ];

  const vegetables = [
    { id: 1, name: "Potato", calories: 12 },
    { id: 2, name: "Tomato", calories: 23 },
    { id: 3, name: "Carrot", calories: 44 },
    { id: 4, name: "Cauliflower", calories: 45 },
    { id: 5, name: "Brinjal", calories: 49 },
  ];

  return (
    <div>
      {fruits.length > 0 ? <List items={fruits} category="fruits" /> : null}

      <hr />
      {vegetables.length > 0 ? (
        <List items={vegetables} category="vegetables" />
      ) : null}
      <hr />
      <List items={fruits} category="fruits" />
      <hr />
      <List items={vegetables} category="vegetables" />
      <hr />
    </div>
  );
};

export default App;
