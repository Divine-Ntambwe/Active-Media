import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import Navbar from "./component/Navbar";
import Digital_Marketing from "./pages/Digital_Marketing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About_Us />} />
        <Route path="/contactUs" element={<Contact_Us />} />
        <Route path="/digitalMarketing" element={<Digital_Marketing />} />
      </Routes>
    </>
  );
}

export default App;
