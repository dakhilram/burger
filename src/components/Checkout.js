import React, { useState } from "react";
import './Checkout.css';
function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to PHP script using fetch() or Axios
  };

  return (
    <div className="container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <h3>Contact Information</h3>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <label htmlFor="state">State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
        <label htmlFor="zip">Zip Code:</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleInputChange}
        />
        <h3>Payment Information</h3>
        <label htmlFor="cardName">Name on Card:</label>
        <input
          type="text"
          name="cardName"
          value={formData.cardName}
          onChange={handleInputChange}
        />
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
        />
        <label htmlFor="expiration">Expiration Date:</label>
        <input
          type="text"
          name="expiration"
          value={formData.expiration}
          onChange={handleInputChange}
        />
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleInputChange}
        />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default Checkout;
