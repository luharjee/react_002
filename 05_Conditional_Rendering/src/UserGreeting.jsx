import React from "react";

const UserGreeting = (props) => {
  let a1 = <h2>Welcome {props.username}</h2>;
  let a2 = <h2>Please login to continue...</h2>;
  return props.isLoggedIn ? a1 : a2;
};

export default UserGreeting;
