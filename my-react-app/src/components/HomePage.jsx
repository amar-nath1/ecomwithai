import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to Our eCommerce Store</h2>
      <div className="promotional-banner">
        <h3>Special Offers Just for You!</h3>
        <p>Check out our latest deals and discounts.</p>
      </div>
      <div className="product-showcase">
        <h3>Featured Products</h3>
        <div className="product-list">
          {/* Product items will be rendered here */}
        </div>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;