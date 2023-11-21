import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/about/About";

function App() {
  return (
    <div className="parent-container">
      <Router>
        <ToastContainer />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/contact" Component={Contact} />
            <Route path="/about" Component={About} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
