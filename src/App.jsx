import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import Recent_Work from "./pages/Recent_Work";
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
<<<<<<< HEAD
          <Route path="/recent-work" element={<Recent_Work />} />
=======
          <Route path="/design-marketing" element={<Digital_Marketing />} />
>>>>>>> aed33a44b4c8a74c6e5979353352dceec6dfefac
        </Routes>
    </Router>
    </>
  );
}

export default App;
