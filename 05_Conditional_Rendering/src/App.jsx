import React from "react";
import UserGreeting from "./UserGreeting";

const App = () => {
  return (
    <div>
      <UserGreeting isLoggedIn={true} username="RAhul" />
    </div>
  );
};

export default App;
