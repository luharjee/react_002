// updater function : A function passed as a argument to setState() usually ex. setYear(year + 1)
// Allow for safe updates based on the previous state used with multiple state updates and asynchronous functions Good practice to use updater functions

import React from "react";
import Update_function from "./Update_function";

const App = () => {
  return (
    <div>
      <Update_function />
    </div>
  );
};

export default App;
