import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import Our_Services from "./pages/Our_Services";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<About_Us />} />
          <Route path="/services" element={<Our_Services />} />
          <Route path="/contactUs" element={<Contact_Us />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
