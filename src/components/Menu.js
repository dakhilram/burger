import React from 'react';
import './Menu.css';
function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li>
          <h3>Burger</h3>
          <p>A juicy beef burger with lettuce, tomato, and cheese</p>
          <span>$10</span>
        </li>
        <li>
          <h3>Chicken Sandwich</h3>
          <p>Crispy chicken sandwich with lettuce and mayo</p>
          <span>$8</span>
        </li>
        <li>
          <h3>Fries</h3>
          <p>Crispy french fries</p>
          <span>$3</span>
        </li>
        {/* Add more menu items here */}
      </ul>
    </div>
  );
}

export default Menu;
