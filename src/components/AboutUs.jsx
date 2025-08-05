import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import storyImg from '../images/story.jpg';
import expertiseImg from '../images/ourexpertise.jpg';
import achievementImg from '../images/achievement.jpg';


const AboutUs = () => {
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
    <main className="about-main-content">
      <section className="about-hero">
        <div className="hero-content">
          <h1>WHO WE ARE</h1>
       
          {/* <img src={heroImg} alt="Drisco Team" className="about-hero-img" /> */}
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div
            className="about-section"
            ref={el => (sectionsRef.current[0] = el)}
          >
            <div className="about-img-wrap left">
              <img src={storyImg} alt="Our Story" className="about-img" />
            </div>
            <div>
              <h2>Our Story</h2>
              <p>
                Eng. Mohamed Aloui established DRISCO back in 1998 following a long international career in O&G business, 
                which started in Abu Dhabi back in 1979.
              </p>
              <p>
                DRISCO is a pioneer company in Tunisia with regards to drilling operations and technical solutions 
                for E&P companies.
              </p>
            </div>
          </div>

          <div
            className="about-section"
            ref={el => (sectionsRef.current[1] = el)}
          >
            <div className="about-img-wrap right">
              <img src={expertiseImg} alt="Our Expertise" className="about-img" />
            </div>
            <div>
              <h2>Our Expertise</h2>
              <p>
                DRISCO is a Tunisian registered private company created in 1998, acting mainly as manpower provider 
                to Oil & Gas major operators and Drilling Contractors.
              </p>
              <p>
                In addition to the main activity, DRISCO is a sales representative of well-known equipment suppliers, 
                supplying equipment to E&P companies and contractors in North Africa.
              </p>
            </div>
          </div>

          <div
            className="about-section"
            ref={el => (sectionsRef.current[2] = el)}
          >
            <div className="about-img-wrap left">
              <img src={achievementImg} alt="Our Achievements" className="about-img" />
            </div>
            <div>
              <h2>Our Achievements</h2>
              <p>
                DRISCO assisted major E&P companies by providing best in class drilling staff in & abroad of Tunisia 
                (Abu Dhabi, Gabon, Libya, Sudan, etc…) during more than 20 years.
              </p>
              <p>
                DRISCO set an important milestone by being the first IWCF well control certifier Center in Tunisia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;