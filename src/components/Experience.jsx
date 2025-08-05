import React, { useEffect, useRef } from 'react';
import './Experience.css';
import tunisiaFlag from '../images/tunisia-flag.png';
import libyaFlag from '../images/libya-flag.png';
import sudanFlag from '../images/sudan-flag.png';
import uaeFlag from '../images/uae-flag.png';
import gabonFlag from '../images/gabon-flag.png';

const Experience = () => {
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
    <main className="experience-main-content">
      <section className="experience-hero fade-in">
        <h1>OUR EXPERIENCE</h1>
        {/* Removed the hero image */}
      </section>

      <section className="experience-content">
        <div className="experience-container">
          {/* Tunisia Section */}
          <div 
            className="country-section" 
            ref={el => (sectionsRef.current[0] = el)}
          >
            <div className="country-header">
              <img src={tunisiaFlag} alt="Tunisia Flag" className="country-flag" />
              <h2 className="country-name">TUNISIA</h2>
            </div>

            {/* TPS Client */}
            <div className="client-section">
              <h3 className="client-name">TPS</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gubbba-2 Drilling Supervisors Sourcing</td>
                    <td>1997</td>
                    <td>Onshore</td>
                  </tr>
                  <tr>
                    <td>Gubbba-3 & 4 Drilling Supervisors Sourcing</td>
                    <td>2000-2001</td>
                    <td>Onshore</td>
                  </tr>
                  <tr>
                    <td>Gercina-13 & 15 Drilling Supervisors Sourcing</td>
                    <td>2000-2001</td>
                    <td>Offshore</td>
                  </tr>
                  <tr>
                    <td>Gubbba-10 Drilling Supervisors Sourcing</td>
                    <td>2007</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* MARETAP Client */}
            <div className="client-section">
              <h3 className="client-name">MARETAP</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EZZ-12 & 8 Drilling Supervisors Sourcing</td>
                    <td>1997</td>
                    <td>Onshore</td>
                  </tr>
                  <tr>
                    <td>EZZ-14-15-16 Drilling Supervisors Sourcing</td>
                    <td>2004</td>
                    <td>Onshore</td>
                  </tr>
                  <tr>
                    <td>Workover Campaign</td>
                    <td>2007</td>
                    <td>Onshore</td>
                  </tr>
                  <tr>
                    <td>Workover & Side Track Campaign</td>
                    <td>2010</td>
                    <td>Onshore</td>
                  </tr>
                  <tr>
                    <td>Workover & Side Track Campaign</td>
                    <td>2018</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Additional Tunisia Clients */}
            <div className="client-section">
              <h3 className="client-name">PREUSSAG</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EL Jem-1 Drilling Supervisors Sourcing</td>
                    <td>2001</td>
                    <td>Onshore</td>
                  </tr>
                  <tr>
                    <td>Cereina South & West Drilling Supervisors Sourcing</td>
                    <td>2001</td>
                    <td>Offshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">ECUMED</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Robbana-2 Drilling Supervisors Sourcing</td>
                    <td>2003</td>
                    <td>Onshore</td>
                  </tr>
                  <tr>
                    <td>Chaal-1 Drilling Supervisors Sourcing</td>
                    <td>2006</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">CTKCP</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SLK-2ST & SLK-10 Campaign Drilling Superintendent Sourcing</td>
                    <td>2001-2002</td>
                    <td>Onshore</td>
                  </tr>
                  <tr>
                    <td>SLK-11 & SLK-12 Campaign Drilling Superintendent Sourcing</td>
                    <td>2003-2006</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">KUFPEC</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Workover Supervisors Sourcing</td>
                    <td>2003-2005</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">SOCO</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Drilling Supervisors Sourcing</td>
                    <td>2006</td>
                    <td>Offshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">OMV</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Drilling Supervisors Sourcing</td>
                    <td>2006</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">CFTP</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Drilling Supervisors Sourcing</td>
                    <td>1999-2014</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">TOPIC SAROST</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rig Manpower Sourcing Drilling Supervisors Sourcing</td>
                    <td>2017-2018, 2021</td>
                    <td>Offshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">ADES</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rig Manpower Sourcing</td>
                    <td>2021-2022</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">MP ZARAT</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Drilling Superintendent Sourcing</td>
                    <td>2001-2002</td>
                    <td>Offshore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Libya Section */}
          <div 
            className="country-section" 
            ref={el => (sectionsRef.current[1] = el)}
          >
            <div className="country-header">
              <img src={libyaFlag} alt="Libya Flag" className="country-flag" />
              <h2 className="country-name">LIBYA</h2>
            </div>

            <div className="client-section">
              <h3 className="client-name">DOLPHIN</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Drilling Supervisors Sourcing</td>
                    <td>2006</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">E&M</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Drilling Supervisors Sourcing</td>
                    <td>2005</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sudan Section */}
          <div 
            className="country-section" 
            ref={el => (sectionsRef.current[2] = el)}
          >
            <div className="country-header">
              <img src={sudanFlag} alt="Sudan Flag" className="country-flag" />
              <h2 className="country-name">SUDAN</h2>
            </div>

            <div className="client-section">
              <h3 className="client-name">GSPOC</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Well site geologist</td>
                    <td>2012</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* UAE Section */}
          <div 
            className="country-section" 
            ref={el => (sectionsRef.current[3] = el)}
          >
            <div className="country-header">
              <img src={uaeFlag} alt="UAE Flag" className="country-flag" />
              <h2 className="country-name">UAE (ABU DHABI)</h2>
            </div>

            <div className="client-section">
              <h3 className="client-name">ADCO</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Drilling Supervisors, Drilling Engineers & Petroleum Engineers Sourcing</td>
                    <td>2001</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">ADMA</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Drilling Supervisors, Drilling Engineers Sourcing</td>
                    <td>2002</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="client-section">
              <h3 className="client-name">NDC</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rig Manpower Sourcing</td>
                    <td>2001</td>
                    <td>Onshore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Gabon Section */}
          <div 
            className="country-section" 
            ref={el => (sectionsRef.current[4] = el)}
          >
            <div className="country-header">
              <img src={gabonFlag} alt="Gabon Flag" className="country-flag" />
              <h2 className="country-name">GABON</h2>
            </div>

            <div className="client-section">
              <h3 className="client-name">FORAID</h3>
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Project & Service Type</th>
                    <th>Period</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rig Manpower Sourcing</td>
                    <td>2001</td>
                    <td>Offshore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;