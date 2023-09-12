import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-container">
            <h1 className="logo">
              <ul>
                <li>
                  <Link to="/">Gayaz-Portfolio</Link>
                </li>
              </ul>
            </h1>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
