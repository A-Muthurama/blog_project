import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from './components/Header'; // ✅ both imported from same file
import Home from './pages/Home';
import About from './pages/About';
import './pages/Home.css';
import './pages/About.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
