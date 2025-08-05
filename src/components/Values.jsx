// Values.jsx
import React, { useEffect, useRef } from 'react';
import './Values.css';
import valuesImage from '../images/values-hero.jpg';



const Values = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            section.classList.add('fade-in');
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="values-main-content">
      <section className="values-hero fade-in">
        <h1>OUR VALUES</h1>
        <img
          src={valuesImage}
          alt="Drisco Team Values"
          className="values-hero-img"
        />
      </section>

      <section className="values-content">
        <div className="values-container">
          <div
            className="values-section"
            ref={el => (sectionsRef.current[0] = el)}
          >
            <div className="values-text">
              <h2>Service Excellence</h2>
              <p>
                We believe in delivering high service quality and satisfying all customer needs and requirements. 
                Therefore, we are constantly improving and searching for better ways to run our operations.
              </p>
            </div>
          </div>

          <div
            className="values-section"
            ref={el => (sectionsRef.current[1] = el)}
          >
            <div className="values-text">
              <h2>Our People</h2>
              <p>
                We strongly rely on our staff and we believe they are the beating heart of our company. 
                That's why we are always concerned about their well-being and comfort both at work and outside of it.
              </p>
              <p>
                We strictly obey and comply with the latest QHSE standards for the oil & gas industry.
              </p>
            </div>
          </div>

          <div
            className="values-section"
            ref={el => (sectionsRef.current[2] = el)}
          >
            <div className="values-text">
              <h2>Environmental Commitment</h2>
              <p>
                We believe in the environment, and we commit to leaving a place better than we first find it as our main policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Values;
