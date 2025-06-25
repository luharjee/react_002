// import React from "react";
// import propTypes from "prop-types";

const Prop = (props) => {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Student : {props.isStudent ? "YES" : "NO"}</p>
      <hr />
    </div>
  );
};

// Student.propTypes = {
//   name: propTypes.string,
//   age: propTypes.number,
//   isStudent: propTypes.bool,
// };

// Student.defaultProps = {
//     name : "Guest",
//     age : 22
// }

export default Prop;
