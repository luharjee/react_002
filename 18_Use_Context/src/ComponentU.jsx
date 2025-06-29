import React, { useState, createContext } from "react";
import ComponentA from "./ComponentA";

export const UserContext = createContext();

const ComponentU = () => {
  const [user, setUser] = useState("Rosi");

  return (
    <div className="box">
      <h1>ComponentU</h1>
      <UserContext.Provider value={user}>
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
};

export default ComponentU;
