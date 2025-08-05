import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Vision from './components/Vision'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Values from './components/Values';
import CoreBusiness from './components/CoreBusiness';
import Experience from './components/Experience';
import ReferencesContact from './components/ReferencesContact';
import Commitment from './components/Commitment';

function App() {
  return (
    <div className="app-container">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/Vision" element={<Vision />} /> 
            <Route path="/Values" element={<Values />} /> 
            <Route path="/Core" element={<CoreBusiness />} /> 
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<ReferencesContact />} />
            <Route path="/commitment" element={<Commitment/>} />
          </Routes>

    </div>
  );
}

export default App;