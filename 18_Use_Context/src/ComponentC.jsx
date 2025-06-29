import React, { useContext } from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentU";

const ComponentC = () => {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{`Hello, ${user}`}</h2>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
