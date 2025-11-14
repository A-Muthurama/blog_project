import React from "react";
import { Link } from "react-router-dom"; 
import "./Home.css";
import img1 from '/image1.jpg';
import img2 from '/image2.png';
import img3 from '/image3.jpg';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Dr. Elsayed<br />
              Mohammed El-Azazi
            </h1>
            <p className="hero-subtitle">
              Preserving nature's genetic legacy for a sustainable future
            </p>
            <div className="hero-buttons">
              <Link to="/articles" className="btn btn-primary">Read My Article</Link>
              <Link to="/about" className="btn btn-secondary"> About Me</Link>
            </div>
            <Link to="/projects" className="link-with-arrow">
              View Genetic Research Projects →
            </Link>
          </div>
          <div className="hero-image">
            <div className="fern-container">
              <div className="fern fern-left">🌿</div>
              <div className="fern fern-right">🌿</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🌱</div>
              <h3 className="stat-number">20+</h3>
              <p className="stat-text">Years in Environmental Research</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <h3 className="stat-number">50M QAR</h3>
              <p className="stat-text">Qatar Gene Bank Project Funding</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔬</div>
              <h3 className="stat-number">15+</h3>
              <p className="stat-text">International Research Projects</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📑</div>
              <h3 className="stat-number">100+</h3>
              <p className="stat-text">Publications & Presentations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="expertise">
        <div className="container">
          <h2 className="section-title">Areas of Expertise</h2>
          <p className="section-subtitle">
            Leading research in plant genetic resources, ecological conservation, and sustainable agriculture
          </p>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">🧬</div>
              <h3>Plant Breeding & Genetics</h3>
              <p>Pioneering heat-tolerant crop development and mutation breeding techniques for arid climate adaptation</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">🌿</div>
              <h3>Ecological Conservation</h3>
              <p>Survey and conservation of native plant biodiversity with focus on endangered species protection</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🌾</div>
              <h3>Sustainable Agriculture</h3>
              <p>Development of climate-smart crop production systems for enhanced food security in challenging environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Leading groundbreaking initiatives in plant conservation and agricultural innovation
          </p>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-badge project-badge-ongoing">Ongoing</div>
              <div
                className="project-image project-img-1"
                style={{
                  backgroundImage: `url(${img1})`,
                }}
              >
                <div className="project-img-placeholder"></div>
              </div>
              <div className="project-content">
                <h3>Establishing Qatar Plant Gene Bank</h3>
                <p>Leading the conservation of genetic diversity of crops and wild plants with a 50M QAR infrastructure development project</p>
                <span className="project-meta">2025 - 2030 • Ministry of Municipality</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-badge project-badge-research">Research</div>
              <div
                className="project-image project-img-2"
                style={{
                  backgroundImage: `url(${img2})`,
                }}
              >
                <div className="project-img-placeholder"></div>
              </div>
              <div className="project-content">
                <h3>Development of Heat Tolerant Tomato Varieties</h3>
                <p>Research on developing superior tomato varieties for greenhouse production in Qatar's extreme climate</p>
                <span className="project-meta">2019 - 2023 • NPRP Funded</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-badge project-badge-iaea">IAEA</div>
              <div
                className="project-image project-img-3"
                style={{
                  backgroundImage: `url(${img3})`,
                }}
              >
                <div className="project-img-placeholder"></div>
              </div>
              <div className="project-content">
                <h3>Conservation of Plant Genetic Resources in Qatar</h3>
                <p>Survey, collection, and characterization of wild plants to preserve Qatar's botanical heritage</p>
                <span className="project-meta">2012 - 2022 • MME Funded</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to='/projects' className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-mark">❝</div>
          <blockquote className="blockquote">
            <p className="quote-text">
              Conserving plant genetic resources is not just science — it's a promise to future generations
            </p>
            <cite className="quote-cite">— Dr. Elsayed M. Elazazi</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};
export default Home;
