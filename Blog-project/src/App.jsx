import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header ,Footer } from "./components/Header"; // Header is default export, Footer is named
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Training from "./pages/Training";
import "./pages/Home.css"
import "./pages/About.css";
import "./pages/Articles.css";
import "./pages/Training.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> {/* top navigation */}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
             <Route path="/training" element={<Training />} />
          </Routes>
        </main>

        <Footer /> {/* footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;


