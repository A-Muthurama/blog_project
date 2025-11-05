import React from 'react';
import './projects.css';

const CalendarIcon = () => (
  <svg className="icon icon-calendar" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="icon icon-building" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const MoneyIcon = () => (
  <svg className="icon icon-money" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Establishing Qatar Plant Gene Bank",
      role: "LPI",
      funding: "50,000,000.00 QR",
      duration: "2025 - 2030",
      organization: "Ministry of Municipality and Environment",
      description: "Leading the establishment of Qatar's national plant gene bank to preserve and conserve plant genetic resources for future generations and food security.",
      image: '/project_images/images1.jpg'
    },
    {
      id: 2,
      title: "Survey, Collection, Characterization, and Conservation of Wild Plants in Qatar",
      role: "Project Manager",
      funding: "1,000,000.00 QR",
      duration: "2012 - 2017",
      organization: "Agricultural Research Department, Ministry of Municipality and Environment",
      description: "Comprehensive survey and conservation program for wild plant species native to Qatar, establishing baseline data for biodiversity management.",
      image: '/project_images/images2.jpeg',  
    },
    {
      id: 3,
      title: "Enriching Genetic Diversity and Conserving Plant Genetic Resources Using Nuclear Techniques",
      role: "LPI and CP",
      funding: "119,000 €",
      duration: "Ongoing",
      organization: "IAEA (QAT5006)",
      description: "Application of nuclear techniques and related technologies to enhance genetic diversity and improve conservation strategies for plant genetic resources.",
  image: '/project_images/images3.jpg',  
      
    },
    {
      id: 4,
      title: "Improvement of Vegetable Production Technology in Protected Agriculture",
      role: "Project Manager",
      funding: "500,000.00 USD",
      duration: "3 years",
      organization: "Funded by MITSUI & CO.",
      description: "Development and implementation of advanced technologies for greenhouse vegetable production to enhance food security in Qatar.",
  image: '/project_images/images4.jpg',  
      
    },
    {
      id: 5,
      title: "Deployment of Heat Tolerant and Superior Quality Tomato Varieties",
      role: "LPI",
      funding: "697,150.00 USD",
      duration: "April 2019 - April 2023",
      organization: "NPRP11S-0129-180378",
      description: "Research and deployment of heat-tolerant tomato varieties specifically adapted for greenhouse production in Qatar's challenging climate conditions.",
  image: '/project_images/images5.jpg',  
      
    },
    {
      id: 6,
      title: "Developing Best Practices for Increased Production of Forages and Vegetables",
      role: "LPI and CP",
      funding: "263,597.00 €",
      duration: "2020 - 2024",
      organization: "IAEA (QAT5008)",
      description: "Optimizing soil, nutrient, water, and plant management practices for enhanced forage production under saline conditions and vegetable production in greenhouses using nuclear techniques.",
  image: '/project_images/images6.jpg',  
      
    },
    {
      id: 7,
      title: "Developing Climate Smart Crop Production",
      role: "CP",
      funding: "2,487,200.00 €",
      duration: "Ongoing",
      organization: "IAEA Regional Project (RAS5099)",
      description: "Regional ARASIA project focused on climate-smart agriculture, improving crop productivity, soil and irrigation management, and food safety using nuclear techniques.",
  image: '/project_images/images7.png',  
      
    },
    {
      id: 8,
      title: "Survey, Collection, Characterization of Plant Genetic Resources for Food and Agriculture",
      role: "Project Manager",
      funding: "1,000,000.00 QR",
      duration: "Ongoing",
      organization: "Agricultural Research Department, Ministry of Municipality and Environment",
      description: "Systematic documentation and conservation of plant genetic resources important for food security and agricultural sustainability in Qatar.",
  image: '/project_images/images8.jpg',  
      
    },
    {
      id: 9,
      title: "Survey, Collection, Characterization, and Conservation of Wild Plants in Qatar",
      role: "Project Manager",
      funding: "1,000,000.00 QR",
      duration: "2017 - 2022",
      organization: "Agricultural Research Department (Founder of Qatar Gene Bank)",
      description: "Foundational project that established Qatar Gene Bank, focusing on comprehensive wild plant conservation and genetic resource management.",
  image: '/project_images/images9.jpg',  
      
    },
    {
      id: 10,
      title: "Protection and Rehabilitation of Ghaf Trees in Qatar",
      role: "Project Team Member",
      funding: "MME Funded",
      duration: "2014 - 2020",
      organization: "Ministry of Municipality and Environment",
      description: "Conservation initiative for Prosopis cineraria (Ghaf trees), focusing on protection and rehabilitation of this culturally and ecologically important species.",
  image: '/project_images/images10.jpg',  
      
    },
    {
      id: 11,
      title: "Survey and Evaluation of Prosopis juliflora in Qatar",
      role: "Project Team Member",
      funding: "MME Funded",
      duration: "2016",
      organization: "Ministry of Municipality and Environment",
      description: "Comprehensive survey and impact assessment of Prosopis juliflora distribution and its ecological effects in Qatar.",
  image: '/project_images/images11.jpg',  
      
    },
    {
      id: 12,
      title: "Qatar Ecological Agriculture",
      role: "Project Team Member",
      funding: "MME Funded",
      duration: "",
      organization: "Ministry of Municipality and Environment",
      description: "",
      image: '/project_images/images12.jpg'
    }
    
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <center>
              <h1 className="projects-title">Research Projects</h1>
          <p className="projects-subtitle">
            Research and conservation initiatives in plant genetic resources and agricultural development
          </p>
          </center>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
            {project.image && (
            <img 
              src={project.image} 
              alt={project.title}
              className="project-card-image"
            />
          )}
          <div className="project-card-content">
            {project.status && (
              <div className="project-status-badge">{project.status}</div>
            )}
            <div className="project-duration"><CalendarIcon />{project.duration}</div>
              <h3 className="project-card-title">{project.title}</h3>
              
              <div className="project-card-meta">
                <div className="project-card-info">
                  <span className="project-role">{project.role}</span>
                  <span className="project-funding">
                    <MoneyIcon />
                    {project.funding}
                </span>
                </div>
                
                
                <div className="project-organization"><BuildingIcon />{project.organization}</div>
              </div>

              <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="stats-cards-container">
        <div className="stat-card">
          <h2>12+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h2>15+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="stat-card">
          <h2>55M+</h2>
          <p>QAR Funding Received</p>
        </div>
        <div className="stat-card">
          <h2>100+</h2>
          <p>Species Conserved</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;