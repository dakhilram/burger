import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  // state to keep track of items in cart
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Classic Burger', price: 9.99, quantity: 2 },
    { id: 2, name: 'Cheeseburger', price: 10.99, quantity: 1 },
    { id: 3, name: 'Fries', price: 3.99, quantity: 3 },
  ]);

  // function to update quantity of items in cart
  const handleQuantityChange = (id, value) => {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex((item) => item.id === id);
    newCartItems[itemIndex].quantity = value;
    setCartItems(newCartItems);
  };

  // function to remove item from cart
  const handleRemoveItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  // calculate total price of items in cart
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleRemoveItem(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total:</td>
            <td></td>
            <td>${totalPrice.toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
