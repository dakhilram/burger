import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <header>
        <img src="burger-banner.jpg" alt="Burger Shop Banner" />
        <h1>Welcome to Burger Shop</h1>
      </header>
      <main>
        <h2>Featured Items</h2>
        <ul>
          <li>
            <img src="a.jpg" alt="Burger 1" />
            <h3>Burger 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span>$9.99</span>
          </li>
          <li>
            <img src="a.jpg" alt="Burger 2" />
            <h3>Burger 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span>$8.99</span>
          </li>
          <li>
            <img src="a.jpg" alt="Burger 3" />
            <h3>Burger 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span>$11.99</span>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Home;
