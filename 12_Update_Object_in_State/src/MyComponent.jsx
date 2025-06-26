import React, { useState } from "react";

const MyComponent = () => {
  const [car, setCar] = useState({
    year: 2000,
    make: "Toyota",
    model: "Supra",
  });

  const handleYearChange = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };

  const handleMakeChange = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };

  const handleModelChange = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  return (
    <div>
      <p>
        Your Favourate car is : {car.year} {car.make} {car.model}
      </p>

      <input
        type="number"
        placeholder="Enter year"
        onChange={handleYearChange}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter car brand"
        onChange={handleMakeChange}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter car model"
        onChange={handleModelChange}
      />
    </div>
  );
};

export default MyComponent;
