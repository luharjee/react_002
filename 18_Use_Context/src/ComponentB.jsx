import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./ComponentU";

const ComponentB = () => {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentB</h1>
      <h3>{`Hello, ${user}`}</h3>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
