import React, { useEffect, useRef } from 'react';
import './ReferencesContact.css';
import contactImage from '../images/contact-hero.jpg';
import { motion } from 'framer-motion';

const ReferencesContact = () => {
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
    <main className="references-main-content">
      {/* Hero Section */}
      <section className="references-hero fade-in">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>REFERENCES & CONTACT</h1>
          <img
            src={contactImage}
            alt="Contact Our Team"
            className="references-hero-img"
          />
        </motion.div>
      </section>

      {/* References Section */}
      <section className="references-content">
        <div className="references-container">
          {/* References Section */}
          <div 
            className="references-section" 
            ref={el => (sectionsRef.current[0] = el)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Client References</h2>
              <p className="section-description">
                We're proud to have worked with these esteemed clients. Feel free to contact them for references about our services.
              </p>

              <div className="client-grid">
                <div className="client-card">
                  <h3>MARETAP</h3>
                  <div className="contact-info">
                    <span className="contact-label">Contact:</span>
                    <a href="mailto:rachedbenkhelifa@maretap.tn" className="contact-email">
                      rachedbenkhelifa@maretap.tn
                    </a>
                  </div>
                </div>

                <div className="client-card">
                  <h3>CTKCP</h3>
                  <div className="contact-info">
                    <span className="contact-label">Contact:</span>
                    <a href="mailto:Hamdi.abdelkader@ctkcp.com" className="contact-email">
                      Hamdi.abdelkader@ctkcp.com
                    </a>
                  </div>
                </div>

                <div className="client-card">
                  <h3>Anglo Tunisian</h3>
                  <div className="contact-info">
                    <span className="contact-label">Contact:</span>
                    <a href="mailto:houcine.qhariania@anglotunisian.com" className="contact-email">
                      houcine.qhariania@anglotunisian.com
                    </a>
                  </div>
                </div>

                <div className="client-card">
                  <h3>SAROST Group</h3>
                  <div className="contact-info">
                    <span className="contact-label">Contact:</span>
                    <a href="mailto:mehdi.benhamouda@sarost-group.com" className="contact-email">
                      mehdi.benhamouda@sarost-group.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <div 
            className="contact-section" 
            ref={el => (sectionsRef.current[1] = el)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2>Get In Touch</h2>
              <p className="section-description">
                Have questions about our services? Contact us directly using the form below.
              </p>

              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReferencesContact;