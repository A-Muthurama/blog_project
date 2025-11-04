import React from "react";
import "./Training.css";

export default function Training() {
  const trainingsAttended = [
    {
      id: 1,
      type: "Training Course",
      year: "2024",
      title: "Bio-saline Agriculture for Land Restoration",
      organization: "International Center for Biosaline Agriculture (ICBA)",
      location: "Dubai, UAE",
      description:
        "Advanced training on biosaline agriculture techniques and their application in land restoration in arid regions.",
    },
    {
      id: 2,
      type: "International Workshop",
      year: "2023",
      title: "Mutation Breeding and Biotechnologies",
      organization: "IAEA / FAO Joint Division",
      location: "Tunisia and Jordan",
      description:
        "Comprehensive workshop on mutation breeding techniques and modern biotechnologies for crop improvement in developing countries.",
    },
    {
      id: 3, 
      type: "Training Workshop",
      year: "2022",
      title: "Advanced Gene Bank Management Systems",
      organization: "FAO International Workshop",
      location: "Rome,Italy",
      description:
        "Best practices modern gene bank management, including seed storage protocols, documentation systems and quality control measures.",
    },
    {
      id: 4,
      type: "Training Course",
      year: "2021",
      title: "Climate Change Adaptation in Agriculture",
      organization: "IUCN Regional Training Program",
      location: "Amman, Jordan",
      description:
        "Strategies for adapting agricultural practices to climate change, with focus on arid and semi-arid regions.",
    },
    {
      id: 5,
      type: "International Conference",
      year: "2021",
      title: "Biodiversity Conservation and Sustainable Use",
      organization: "International Conference on Biodiversity",
      location: "Abu Dhabi, UAE",
      description:
        "Keynote speaker and workshop facilitator on biodiversity conservation strategies and sustainable resource management.",
    },
    {
      id: 6,
      type: "Training Course",
      year: "2016",
      title: "Molecular Markers in Plant Breeding",
      organization: "IAEA Training Program",
      location: "Vienna, Austria",
      description:
        "Applications of molecular markers and DNA-based technologies in plant breeding programs.",
    },
    {
      id: 7,
      type: "Certification Course",
      year: "2015",
      title: "Seed Health Testing and Quality Assurance",
      organization: "ISTA (International Seed Testing Association)",
      location: "Switzerland",
      description:
        "International certification on seed health testing protocols and quality assurance standards.",
    },
    {
      id: 8,
      type: "Training Workshop",
      year: "2014",
      title: "Ex-situ Conservation Techniques",
      organization: "Botanic Gardens Conservation International (BGCI)",
      location: "London, UK",
      description:
        "Advanced techniques in ex-situ conservation including seed banks, cryopreservation and tissue culture.",
    },
    {
      id: 9,
      type: "Training Course",
      year: "2012",
      title: "Germplasm Management and Documentation",
      organization: "Bioversity International",
      location: "Rome, Italy",
      description:
        "Training on germplasm management systems, documentation standards and international data sharing protocols.",
    },
    {
      id: 10,
      type: "InternationalTraining",
      year: "2012",
      title: "Seed Conservation Techniques",
      organization:
        " Chinese Academy of Sciences",
      location: "Beijing, China",
      description:
        "Comprehensive training on modern seed conservation techniques and gene bank establishment."
      },
  ];

  const programsDelivered = [
    {
      id: 1,
      role: "Instructor",
      year: "2021",
      title: "National Workshop on Plant Genetic Resources",
      location: "Doha, Qatar",
      description:
        "Comprehensive training on modern seed conservation techniques and gene bank establishments.",
    },
    {
      id: 2,
      role: "Instructor",
      year: "2023",
      title: "Gene Bank Management Training",
      location: "Doha, Qatar",
      description:
        "Training program for Ministry of Municipality staff on gene bank protocols and seed conservation techniques.",
    },
  ];

  return (
    <div className="training-page">
      <h2 className="section-title">Professional Development</h2>
      <h3 className="section-subtitle">Training & Workshops</h3>
      <p className="section-desc">
        International training programs and professional development activities
      </p>

      {/* Trainings Attended */}
      <section className="training-section">
        <h4 className="section-header">
          🌍 International Training & Workshops Attended
        </h4>
        <div className="training-grid">
          {trainingsAttended.map((item) => (
            <div key={item.id} className="training-card">
              <div className="card-meta">
                <span className="tag">{item.type}</span>
                <span className="year">{item.year}</span>
              </div>
              <h5>{item.title}</h5>
              <p className="org">{item.organization}</p>
              <p className="loc">{item.location}</p>
              <p className="desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Delivered */}
      <section className="training-delivered">
        <h4 className="section-header">🎓 Training Programs Delivered</h4>
        <div className="delivered-row">
          {programsDelivered.map((p) => (
            <div key={p.id} className="delivered-card">
              <div className="card-top">
                <span className="role">{p.role}</span>
                <span className="year">{p.year}</span>
              </div>
              <h5>{p.title}</h5>
              <p className="loc">{p.location}</p>
              <p className="desc">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="training-stats">
        <div className="stat">
          <h3>30+</h3>
          <p>International Workshops</p>
        </div>
        <div className="stat">
          <h3>15+</h3>
          <p>Countries Visited</p>
        </div>
        <div className="stat">
          <h3>10+</h3>
          <p>Training Programs Led</p>
        </div>
        <div className="stat">
          <h3>200+</h3>
          <p>Researchers Trained</p>
        </div>
      </div>
    </div>
  );
}
