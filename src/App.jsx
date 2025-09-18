import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FooterCTA from "./Components/Footer"; // ✅ import Footer
import Home from "./Home";
import About from "./About";
import Ourassistance from "./pages/Assistance";
import Letstalk from "./pages/Letstalk";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToHash from "./utils/ScrollToHash";


function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
         <ScrollToTop />
            <ScrollToHash />
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourassistance" element={<Ourassistance />} />
            <Route path="/letstalk" element={<Letstalk />} />
          </Routes>
        </div>

        {/* ✅ Footer shown on every page */}
        <FooterCTA />
      </div>
    </Router>
  );
}

export default App;
