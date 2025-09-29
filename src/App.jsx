import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import Recent_Work from "./pages/Recent_Work";
import Cloud_Based_Solutions from "./pages/Cloud_Based_Solutions";
import Navbar from "./component/Navbar";


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About_Us />} />
          <Route path="/contact-us" element={<Contact_Us />} />
          <Route path= '/ourwork' element= {<Recent_Work/>}/>
        </Routes>
    </>
  );
}

export default App;