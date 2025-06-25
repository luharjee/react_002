import React from "react";
import { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Kali");

  const [age, setAge] = useState(10);

  const [isEmployed, setIsEmployed] = useState(false);

  const updateAge = () => {
    setAge(age + 1);
  };

  const updateName = () => {
    setName("Rahul");
  };

  const toggle = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age : {age}</p>
      <button onClick={updateAge}>Update Age</button>

      <p>Is Employed : {isEmployed ? "YEs" : "No"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default MyComponent;
