// CoreBusiness.jsx
import React, { useRef, useState, useEffect } from 'react';
import './CoreBusiness.css';
import manpowerImg from '../images/manpower.jpg';
import equipmentImg from '../images/equipment.jpg';
import servicesImg from '../images/services.jpg';
import trainingImg from '../images/training.jpg';

const CoreBusiness = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const businessAreas = [
    {
      title: "Manpower Services",
      image: manpowerImg,
      items: [
        "Providing O&G companies with qualified & well-experienced staff",
        "Office & well site based personnel",
        "Consultants, supervisors and engineers for offshore & onshore",
        "Providing Drilling Contractors with qualified rig manpower"
      ]
    },
    {
      title: "Equipment Supply",
      image: equipmentImg,
      items: [
        "Supplying oil equipment & products",
        "Global partnerships",
        "Supplying through foreign suppliers based in Dubai (UAE), India Canada and EU"
      ]
    },
    {
      title: "Additional Services",
      image: servicesImg,
      items: [
        "Civil Works",
        "Logistics",
        "Maintenance",
        "Consulting and studies"
      ]
    },
    {
      title: "Training & Certification",
      image: trainingImg,
      items: [
        "Industry seminars and courses",
        "IWCF certification",
        "Courses for all technical personnel levels",
        "IWCF certification accredited center"
      ]
    }
  ];

  // Group business areas into slides of two cards each
  const groupedBusinessAreas = [];
  for (let i = 0; i < businessAreas.length; i += 2) {
    groupedBusinessAreas.push(businessAreas.slice(i, i + 2));
  }

  useEffect(() => {
    setTotalSlides(groupedBusinessAreas.length);
  }, [groupedBusinessAreas.length]);

  const scrollToSlide = (slideIndex) => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideIndex * containerWidth,
        behavior: 'smooth'
      });
      setCurrentSlide(slideIndex);
    }
  };

  const scrollToNext = () => {
    if (currentSlide < totalSlides - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  const scrollToPrev = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  return (
    <main className="core-business-main">
      <section className="core-business-hero">
          <div className="hero-decoration hero-decoration-1"></div>
  <div className="hero-decoration hero-decoration-2"></div>
  <div className="hero-decoration hero-decoration-3"></div>
        <div className="hero-content">
          <h1>COMPANY CORE BUSINESS</h1>
          <p className="subtitle">DRISCO'S MAIN ACTIVITIES ARE:</p>
        </div>
      </section>

      <div className="cards-container-wrapper">
        <div className="cards-container" ref={sliderRef}>
          {groupedBusinessAreas.map((slide, slideIndex) => (
            <div key={slideIndex} className="slide">
              {slide.map((area, index) => (
                <div key={`${slideIndex}-${index}`} className="business-card">
                  <div className="card-image" style={{ backgroundImage: `url(${area.image})` }}>
                    <div className="image-overlay"></div>
                    <h2>{area.title}</h2>
                  </div>
                  <div className="card-content">
                    <ul>
                      {area.items.map((item, i) => (
                        <li key={i}>
                          <span className="bullet"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="slider-nav">
          <button 
            onClick={scrollToPrev}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button 
            onClick={scrollToNext}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </main>
  );
};

export default CoreBusiness;