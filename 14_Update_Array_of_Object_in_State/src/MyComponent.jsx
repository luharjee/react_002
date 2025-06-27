import React, { useState } from "react";

const MyComponent = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState();
  const [carMake, setCarMake] = useState();
  const [carModel, setCarModel] = useState();

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake();
    setCarModel();
  };

  const handleRemoveCar = (index) => {
    setCars(cars.filter((_, i) => i !== index));
  };

  const handleYearChange = (event) => {
    setCarYear(event.target.value);
  };

  const handleMakeChange = (event) => {
    setCarMake(event.target.value);
  };

  const handleModelChange = (event) => {
    setCarModel(event.target.value);
  };

  return (
    <div>
      <h2>List of Cars Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <br />
      <br />
      <input
        type="number"
        placeholder="Enter Year"
        onChange={handleYearChange}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Car Brand"
        onChange={handleMakeChange}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter car Model"
        onChange={handleModelChange}
      />
      <br />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

export default MyComponent;
