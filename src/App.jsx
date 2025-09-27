import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import Our_Services from "./pages/Our_Services";
import Cloud_Based_Solutions from "./pages/Cloud_Based_Solutions";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Our_Services />} />
          <Route path="/aboutUs" element={<About_Us />} />
          <Route path="/contactUs" element={<Contact_Us />} />
          <Route path="/cloud-solutions" element={<Cloud_Based_Solutions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
