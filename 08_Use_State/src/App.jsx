// React Hook : Special function that allows functional component to use React features without writing class component .

// useState() : A React Hook allows the creation of a stateful variable AND a setter function to update its value in the virtual DOM.
// [name, state]

import React from "react";
import MyComponent from "./MyComponent";
import Counter_Project from "./Counter_Project";

const App = () => {
  return (
    <div>
      <Counter_Project />
    </div>
  );
};

export default App;
