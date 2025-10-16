//import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import Software from "./pages/Software";
import Rhaddock from "./pages/Our_Work";
import Cloud_Based_Solutions from "./pages/Cloud_Based_Solutions";
import Navbar from "./component/Navbar";
import ECommercePage from "./pages/ECommercePage";
import Recent_Work from "./pages/Our_Work";
import Digital_Marketing from "./pages/Digital_Marketing";


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About_Us />} />
        <Route path="/contact-us" element={<Contact_Us />} />
        <Route path="/software" element={<Software />} />
        <Route path="/cloud" element={<Cloud_Based_Solutions />} />
        <Route path="/design-marketing" element={<Digital_Marketing />} />
        <Route path="/recent" element={<Recent_Work/>}/>
      </Routes>
    </Router>
  );
}

export default App;