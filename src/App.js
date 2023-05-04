import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/menu" render={() => <Menu addToCart={addToCart} />} />
        <Route path="/cart" render={() => <Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/checkout" render={() => <Checkout cartItems={cartItems} />} />
        <Route path="/confirmation" component={OrderConfirmation} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
