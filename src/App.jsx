import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import Cloud_Based_Solutions from "./pages/Cloud_Based_Solutions";
import Navbar from "./component/Navbar";
import Digital_Marketing from "./pages/Digital_Marketing";


function App() {
  return (
    <> 

    <Router>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About_Us />} />
          <Route path="/contact-us" element={<Contact_Us />} />
          <Route path="/design-marketing" element={<Digital_Marketing />} />
          <Route path="/cloud-based-solutions" element={<Cloud_Based_Solutions />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
