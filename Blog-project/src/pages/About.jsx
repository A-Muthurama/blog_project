import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section with Profile */}
      <section className="about-hero">
        <div className="container">
          <div className="about-header-center">
            <button className="about-tab-btn">About the Expert</button>
            <h1>Meet Dr. Elsayed M. Elazazi</h1>
            <p className="about-tagline">
              A leading expert in plant genetic resources and ecological research
            </p>
          </div>

          <div className="about-hero-content">
            <div className="about-intro-box">
              <p>
                Dr. Elsayed Mohammed El-Azazi is a distinguished expert in Plant Genetic 
                Resources and Ecological Research with over 20 years of dedicated service 
                to environmental conservation and sustainable agriculture. His work focuses 
                on preserving biodiversity, developing climate-resilient crop varieties, 
                and establishing comprehensive seed banks for future generations.
              </p>
              <p>
                Currently serving as Plant Genetic Resources Expert at the Ministry of 
                Municipality, Qatar, Dr. Elazazi leads groundbreaking initiatives in genetic 
                conservation and ecological restoration. His research has significantly 
                contributed to understanding plant adaptations in arid environments and 
                developing strategies for sustainable land use.
              </p>
              <p>
                Through collaboration with international organizations including IAEA, 
                FAO, and IUCN, Dr. Elazazi has established himself as a global authority in 
                plant breeding, seed conservation, and biodiversity preservation. His 
                pioneering work in heat-tolerant crop development and gene banking 
                continues to shape conservation strategies across the Middle East and 
                beyond.
              </p>
            </div>

            <div className="about-profile">
              <div className="profile-image-wrapper">
                <img src="/profile-img.png" alt="Dr. Elsayed M. Elazazi" />
              </div>
            </div>
          </div>

          <div className="current-role-box">
            <h3>Current Role</h3>
            <p className="role-title">Plant Genetic Resources Expert</p>
            <p className="role-org">Ministry of Municipality, Qatar</p>
          </div>

          <div className="languages-box">
            <h3>Languages</h3>
            <div className="language-tags">
              <span className="language-tag">Arabic (Native)</span>
              <span className="language-tag">English (Fluent)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="container">
          <div className="section-header-left">
            <div className="section-icon-left">🎓</div>
            <h2>Education</h2>
          </div>

          <div className="education-list">
            <div className="education-item-card">
              <div className="education-content-left">
                <h3>Ph.D. in Environmental Sciences</h3>
                <p className="education-thesis">Ecophysiological Studies of Acacia Species</p>
                <p className="education-uni">Suez Canal University</p>
              </div>
              <div className="education-year-badge">2013</div>
            </div>

            <div className="education-item-card">
              <div className="education-content-left">
                <h3>M.Sc. in Environmental Sciences</h3>
                <p className="education-thesis">Seed Viability and Preservation in Gene Banks</p>
                <p className="education-uni">Suez Canal University</p>
              </div>
              <div className="education-year-badge">2008</div>
            </div>

            <div className="education-item-card">
              <div className="education-content-left">
                <h3>B.Sc. in Agricultural Sciences</h3>
                <p className="education-thesis">Botany and Plant Ecology</p>
                <p className="education-uni">Suez Canal University</p>
              </div>
              <div className="education-year-badge">2002</div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header-left">
            <div className="section-icon-left">💼</div>
            <h2>Professional Highlights</h2>
          </div>

          <ul className="highlights-list">
            <li>Lead Principal Investigator for Qatar Plant Gene Bank (2025-2030) - 50M QAR project</li>
            <li>Principal Investigator for multiple IAEA collaborative research projects</li>
            <li>Member of Qatar National Biodiversity Strategy Team (2025-2030)</li>
            <li>Conducted over 15 international research projects in plant genetic resources</li>
            <li>Trainer and lecturer in national and international workshops on biodiversity</li>
            <li>Published extensively in peer-reviewed journals and international conferences</li>
            <li>Expert in gene bank management and seed conservation techniques</li>
            <li>Contributed to the conservation of endangered plant species in Qatar</li>
          </ul>
        </div>
      </section>

      {/* International Collaboration */}
      <section className="collaboration-section">
        <div className="container">
          <div className="section-header-left">
            <div className="section-icon-left">🌐</div>
            <h2>International Collaboration</h2>
          </div>

          <div className="collaboration-grid">
            <div className="collab-column">
              <h3>Research Partnerships</h3>
              <ul className="collab-list-simple">
                <li>IAEA (International Atomic Energy Agency)</li>
                <li>FAO (Food and Agriculture Organization)</li>
                <li>ICBA (International Center for Biosaline Agriculture)</li>
                <li>Chinese Academy of Sciences</li>
                <li>Multiple universities across the Middle East and North Africa</li>
              </ul>
            </div>

            <div className="collab-column">
              <h3>Professional Memberships</h3>
              <ul className="collab-list-simple">
                <li>IUCN - International Union for Conservation of Nature</li>
                <li>Qatar National Biodiversity Strategy Team (2025-2030)</li>
                <li>Regional Biodiversity Expert Networks</li>
                <li>International Gene Bank Management Associations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Expertise */}
      <section className="expertise-section">
        <div className="container">
          <div className="section-header-left">
            <div className="section-icon-left">🔬</div>
            <h2>Key Expertise</h2>
          </div>

          <div className="expertise-grid-about">
            <div className="expertise-card-about">
              <h3>Plant Genetic Resources Conservation</h3>
              <p>Expert in establishing and managing gene banks, seed preservation protocols, and long-term conservation strategies for crop wild relatives and endangered species.</p>
            </div>

            <div className="expertise-card-about">
              <h3>Ecological Research & Assessment</h3>
              <p>Conducting terrestrial ecological surveys, biodiversity assessments, and environmental impact studies across arid and semi-arid ecosystems.</p>
            </div>

            <div className="expertise-card-about">
              <h3>Climate-Smart Agriculture</h3>
              <p>Developing heat-tolerant crop varieties, mutation breeding programs, and sustainable agricultural practices for challenging environmental conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in Collaboration?</h2>
            <p>
              Dr. Elsayed-Azazi welcomes opportunities for research collaboration, academic partnerships, 
              and consulting projects in plant genetic resources and sustainable agriculture.
            </p>
            <div className="cta-buttons">
             <Link to="/contact" className="nav-link">Contact</Link>
             <Link to="/projects" className="nav-link">Projects</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;