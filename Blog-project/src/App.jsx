import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from './components/Header'; 
import Home from './pages/Home';
import About from './pages/About';
import './pages/Home.css';
import './pages/About.css';
import Contact from './pages/Contact';
import './pages/Contact.css';
import Articles from './pages/Articles';
import './pages/Articles.css';
import Training from './pages/Training';
import './pages/Training.css';
import Projects from './pages/projects';
import './pages/projects.css';
import Publications from './pages/publications';
import './pages/publications.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
             <Route path="/articles" element={<Articles />} />
             <Route path="/training" element={<Training />} />
             <Route path="/contact" element={<Contact />} />
             
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
