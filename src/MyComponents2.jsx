import React, { useState } from 'react';

function MyComponents2() {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    const newValue = event.target.value;

    if (newValue === '') {
      setQuantity('');
    } else {
      const numValue = parseFloat(newValue);
      if (numValue >= 1) {
        setQuantity(numValue);
      }
    }
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentMethodChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingMethodChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input
        value={quantity}
        onChange={handleQuantityChange}
        type="number"
        min="1"
      />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instruction"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentMethodChange}>
        <option value="">Select a payment method</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p> Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingMethodChange}/>
          Pick Up
      </label>
      <br/>
      <label>
        <input type="radio" value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingMethodChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponents2;
