import React from 'react';
import './Home.css';
import backgroundImage from '../images/drilling-background.jpg'; // Adjust path as needed


const Home = () => {
  return (
    <main className="main-content">
      <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-content">
          <h1 className="main-title">
            A DRILLING SERVICES <br />
            and CONSULTANCY COMPANY 
          </h1>
          <p className="subtitle">
            Expert consultancy and services for oil, gas, and mineral exploration
          </p>
          <div className="button-container">
            <button className="cta-button">BOOK A CONSULTATION</button>
            <button className="abt-button">ABOUT US</button>
          </div>
        </div>
      </div>

      <section className="features-section">
        <div className="feature-card">
          <h3>Founding & Legacy</h3>
          <p>Eng. Mohamed Aloui established DRISCO back in 1998 acting mainly as manpower provider to Oil & Gas major operators and Drilling Contractors.</p>
        </div>
        <div className="feature-card">
          <h3>Our Strategic Role</h3>
          <p>DRISCO serves as North Africa's premier sales representative for leading drilling equipment suppliers, serving E&P companies and contractors across the region.</p>
        </div>
        <div className="feature-card">
          <h3>Global Operations</h3>
          <p>Serving clients across 5 continents with proven results</p>
        </div>
      </section>
    </main>
  );
};

export default Home;