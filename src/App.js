// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Portfolio from "./Components/Portfolio";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-blue-600 text-white py-4">
          <ul className="flex justify-center space-x-6">
            <li>< a href="/" className="hover:text-yellow-500">Home</a></li>
            <li>< a href="/about" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="/pricing" className="hover:text-yellow-500">Pricing</a></li>
            <li><a href="/portfolio" className="hover:text-yellow-500">Portfolio</a></li>


          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />

        </Routes>
      </div>
    </Router>  
  )
}

export default App;
