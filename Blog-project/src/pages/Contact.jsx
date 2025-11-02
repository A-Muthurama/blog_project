import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Dr. El-Azazi will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <button className="contact-tab-btn">Get in Touch</button>
            <h1>Contact</h1>
            <p className="contact-subtitle">
              Get in touch for research collaboration and professional inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form Box */}
            <div className="contact-box">
              <h2>Send a Message</h2>
              
              <div className="form-container">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Your name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='name@gmail.com'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button onClick={handleSubmit} className="btn-send-message">
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information Box */}
            <div className="contact-box">
              <h2>Contact Information</h2>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon">🕻</div>
                  <div className="contact-details">
                    <a href="tel:+97477254341">+974 7725 4341</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">✉</div>
                  <div className="contact-details">
                    <a href="mailto:emazazi@mm.gov.qa">emazazi@mm.gov.qa</a>
                    <a href="mailto:Elazazi_genebank@yahoo.com">Elazazi_genebank@yahoo.com</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">⚲</div>
                  <div className="contact-details">
                    <p>Genetic Resources Section Agricultural Research</p>
                    <p>Department Ministry of Municipality</p>
                    <p>Doha, State of Qatar</p>
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div className="professional-links-section">
                <h3>Professional Links</h3>
                <div className="social-links">
                  <a href="https://linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  className="social-link"
> <span className="social-icon">
   <i className="fa-brands fa-linkedin-in" style={{fontSize:"25px"}}></i>
  </span>
  LinkedIn
</a>

                  <a href="https://researchgate.net" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-icon">
                       <i className="fa-brands fa-researchgate" style={{fontSize:"25px"}}></i></span>
                    Research Gate
                  </a>
                  <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-icon">
                    <i className="fa-solid fa-graduation-cap" style={{fontSize:"25px"}}></i></span>
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="collaboration-opportunities">
        <div className="container">
          <h2>Collaboration Opportunities</h2>
          <p className="collab-intro">
            <b>Dr. Elazazi welcomes collaboration opportunities in the following areas:</b>
          </p>

          <ul className="opportunities-list">
            <li>Plant genetic resources conservation and gene bank management</li>
            <li>Climate-resilient crop development for arid regions</li>
            <li>Biodiversity surveys and ecological restoration projects</li>
            <li>International training programs and capacity building</li>
            <li>Research publications and peer-review activities</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;