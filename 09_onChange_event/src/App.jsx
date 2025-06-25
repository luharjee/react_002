// onChange event : event handler used primilarly with from elements ex. <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input change.

import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Rahul");

  const [age, setAge] = useState(22);

  const [quantity, setQuantity] = useState(20);

  const [comment, setComment] = useState();

  const [payment, setPayment] = useState("VISA");

  const [shipping, setShipping] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <br />
      <br />
      <input value={age} onChange={handleAgeChange} />
      <br />
      <br />
      <input type="text" value={quantity} onChange={handleQuantityChange} />
      <br />
      <br />
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your delivery"
      />

      <br />
      <br />
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select payment option</option>
        <option value="VISA">VISA</option>
        <option value="mastercard">mastercard</option>
        <option value="rupey">Rupey</option>
      </select>

      <br />
      <br />
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>

      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>

      <h1>Name: {name}</h1>
      <h1>Age : {age}</h1>
      <h1>Quantity : {quantity}</h1>
      <p>Comment: {comment}</p>
      <p>Payemnt Method: {payment}</p>

      <p>Shipping : {shipping}</p>
    </div>
  );
};

export default App;
