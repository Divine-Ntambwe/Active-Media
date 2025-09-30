import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import Cloud_Based_Solutions from "./pages/Cloud_Based_Solutions";
import Software from "./pages/Software";
import Navbar from "./component/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About_Us />} />
        <Route path="/contactUs" element={<Contact_Us />} />
        <Route path="/software" element={<Software />} />
      </Routes>
    </Router>
  );
}

export default App;
