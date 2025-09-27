
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import Our_Services from "./pages/Our_Services";
import Navbar from "./component/Navbar";
import Digital_Marketing from "./pages/Digital_Marketing";

function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutUs" element={<About_Us />} />
          <Route exact path="/contactUs" element={<Contact_Us />} />
          <Route exact path="/DigitalMarketing" element={<Digital_Marketing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
