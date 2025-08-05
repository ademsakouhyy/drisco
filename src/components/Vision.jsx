import React from 'react';
import { motion } from 'framer-motion';
import visionImage from '../images/vision.jpg'; 
import './Vision.css';

const Vision = () => {
  return (
    <div className="vision-main-container">
      <section className="vision-hero">
        <h1 className="vision-hero-title">OUR VISION</h1>
      </section>

      <div className="vision-content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="vision-header"
        >
          <h2 className="vision-subtitle">Our Philosophy</h2>
        </motion.div>

        <div className="vision-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="vision-text-content"
          >
            <p className="vision-paragraph">
              The company aims to build strong and long-lasting bonds through partnerships and conventions both with other service firms and clients in order to deliver the best quality service possible with the lowest budget and the least effects on the social and environmental levels.
            </p>
            
            <p className="vision-paragraph">
              Collaboration and mutual gain is our goal because we believe that win-win situations and gathered efforts are the fundamentals of long-term business partnerships.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="vision-image-section"
          >
            <div className="vision-image-wrapper">
              <img 
                src={visionImage} 
                alt="Team collaboration meeting" 
                className="vision-image"
              />
              <div className="vision-image-overlay"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="vision-cta-container"
        >
          <button className="vision-cta-button">
            Learn About Our Approach
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;