import React from 'react';
import './Commitment.css';

const Commitment = () => {
  return (
    <main className="commitment-main-content">
      <section className="commitment-hero fade-in">
        <h1>OUR COMMITMENT</h1>
        <p className="subtitle">
          Dedicated to safety, quality, and sustainable growth in every project.
        </p>
      </section>
      <section className="commitment-content">
        <div className="commitment-container">
          <p>
            At DRISCO, our commitment is to deliver exceptional service and maintain the highest safety standards in all our operations. We believe that safety is not just a requirement, but a core value that guides every decision we make.
          </p>
          <p>
            We strive for continuous improvement and innovation, ensuring that our solutions are both effective and sustainable. Our team is dedicated to adopting best practices and leveraging new technologies to exceed client expectations.
          </p>
          <p>
            Building long-term partnerships with our clients and communities is at the heart of our mission. We are committed to integrity, transparency, and respect, fostering trust and collaboration in every project we undertake.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Commitment;