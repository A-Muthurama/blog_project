import React, { useState } from 'react';
import './publications.css';

// Icon Components
const JournalIcon = () => (
  <svg className="icon icon-journal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const BookIcon = () => (
  <svg className="icon icon-book" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

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

const GraduationIcon = () => (
  <svg className="icon icon-graduation" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const GridIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
  </svg>
);

const ListIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
);

const PublicationsPage = () => {
  const [articlesView, setArticlesView] = useState('grid');
  const [booksView, setBooksView] = useState('grid');
  const [thesesView, setThesesView] = useState('grid');

  const publications = [
    {
      id: 1,
      title: "Genotypic Selection Using Quantitative Trait Loci for Better Productivity under High Temperature Stress in Tomato",
      journal: "Horticulturae, 2024, Vol. 10, No. 874",
      year: 2024,
      description: "Research on genetic selection methods to improve tomato productivity under heat stress conditions, utilizing QTL analysis for breeding programs.",
      link: "https://doi.org/10.3390/horticulturae10080874"
    },
    {
      id: 2,
      title: "Salt Tolerance of Selected Halophytes at the Two Initial Growth Stages for Future Management Options",
      journal: "Scientific Reports, 2021, Vol. 11",
      year: 2021,
      description: "Investigation of salt tolerance mechanisms in halophytic plants during early growth stages, providing insights for sustainable agriculture in saline environments.",
      link: "https://doi.org/10.1038/s41598-021-89462-3"
    },
    {
      id: 3,
      title: "Enriching Genetic Diversity and Conserving Plant Genetic Resources Using Nuclear Techniques in Qatar",
      journal: "FAO/IAEA International Symposium on Plant Mutation Breeding and Biotechnology, 2018",
      year: 2018,
      description: "Presentation on the application of nuclear techniques and biotechnologies for conservation and enhancement of plant genetic resources in Qatar.",
      link: "https://conferences.iaea.org/indico/event/145/contributions/5067/"
    },
    {
      id: 4,
      title: "Distribution of the Endangered Haloxylon persicum and Conservation for Food Security in Qatar",
      journal: "Qatar Foundation Annual Research Conference Proceedings, 2018",
      year: 2018,
      description: "Study on the distribution and conservation status of the endangered Ghada plant (Haloxylon persicum) and its importance for food security.",
      link: "http://doi.org/10.5339/qfarc.2018.EEPD919"
    },
    {
      id: 5,
      title: "Effects of Storage Conditions and Dormancy-Breaking Treatments on Citrullus colocynthis Seeds",
      journal: "Global Advanced Research Journal of Agricultural Science, 2017, Vol. 6(10), pp. 333-346",
      year: 2017,
      description: "Comprehensive analysis of optimal storage conditions and germination enhancement techniques for wild melon seeds in gene bank conservation.",
      link: "http://garj.org/full-articles/effects-of-storage-conditions-storage-periods-and-dormancy-breaking-treatments-on-the-viability-and-germination-of-citrullus-colocynthis-l-schrad-seeds.pdf"
    },
    {
      id: 6,
      title: "Conservation of Some Medicinal Plants in Qatar for Food Security and Environmental Sustainability",
      journal: "Conference: Wild, Medical Plants, Islamic Knowledge and Botanical Preservation in Qatar and the Gulf, 2017",
      year: 2017,
      description: "Interdisciplinary approach to conserving medicinal plants in Qatar, bridging traditional knowledge with modern conservation practices.",
      link: null
    },
    {
      id: 7,
      title: "Current Status of Ghaf Trees (Prosopis cineraria) in the State of Qatar",
      journal: "QScience Proceedings, QULSS 2016: Biodiversity, Sustainability and Climate Change",
      year: 2016,
      description: "Assessment of the distribution, health status, and conservation needs of Ghaf trees, an ecologically and culturally important species in Qatar.",
      link: "http://www.qscience.com/doi/10.5339/qproc.2016.qulss.21"
    },
    {
      id: 8,
      title: "The Role of Gene Banks to Preservation Plant Genetic Resources for Combat Food Insecurity in Qatar",
      journal: "Qatar Foundation Annual Research Conference Proceedings, 2016",
      year: 2016,
      description: "Examination of gene bank functions and their critical role in addressing food security challenges through conservation of plant genetic diversity.",
      link: "http://www.qscience.com/doi/pdf/10.5339/qfarc.2016.EEPP2250"
    },
    {
      id: 9,
      title: "Effective Methods to Improvement Capparis Spinosa Seeds Germination by Breaking Seed Dormancy",
      journal: "Qatar Foundation Annual Research Conference Proceedings, 2016",
      year: 2016,
      description: "Development of techniques to overcome seed dormancy in caper plants, improving conservation efficiency in gene banks.",
      link: "http://www.qscience.com/doi/abs/10.5339/qfarc.2016.EEPP2483"
    },
    {
      id: 10,
      title: "Balanites aegyptiaca: First Record for the Flora in Qatar",
      journal: "Global Advanced Research Journal of Agricultural Science, 2015, Vol. 4(8), pp. 387-390",
      year: 2015,
      description: "Documentation of the first record of Balanites aegyptiaca in Qatar's flora, contributing to the understanding of plant biodiversity.",
      link: "http://garj.org/garjas/8/2015/4/8/balanitesaegyptiaca-firstrecord-for-the-flora-in-qatar"
    },
    {
      id: 11,
      title: "Ex-Situ Conservation of Some Quranic Plants Growing in the State of Qatar",
      journal: "Qatar Foundation Annual Research Conference Proceedings, 2014",
      year: 2014,
      description: "Conservation program for plants mentioned in the Quran, preserving cultural heritage alongside botanical diversity.",
      link: "http://www.qscience.com/doi/abs/10.5339/qfarc.2014.EEPP0096"
    },
    {
      id: 12,
      title: "Ecological Studies of Some Acacia Species Grown in Egyptian Deserts",
      journal: "Global Journal of Bio-Science and Biotechnology, 2013, Vol. 2(4), pp. 485-492",
      year: 2013,
      description: "Comprehensive ecological assessment of Acacia species in desert environments, informing conservation and restoration strategies.",
      link: "http://scienceandnature.org/GJBB_Vol2(4)2013/GJBB-V2(4)2013-6.pdf"
    },
    {
      id: 13,
      title: "Effect of Storage Conditions on Seed Viability of Acacia tortilis and Acacia raddiana",
      journal: "Journal of Biodiversity and Environmental Sciences, 2013, Vol. 3(12), pp. 230-237",
      year: 2013,
      description: "Investigation of optimal gene bank storage protocols for maintaining seed viability in important desert Acacia species.",
      link: "http://innspub.net/wp-content/uploads/2013/12/JBES-Vol3No12-p230-237.pdf"
    },
    {
      id: 14,
      title: "Improving Acacia tortilis Seeds Germination by Breaking Dormancy Treatments",
      journal: "International Journal of Applied Biology and Pharmaceutical Technology, 2013, Vol. 3(1), pp. 103-109",
      year: 2013,
      description: "Development of effective dormancy-breaking protocols to enhance germination rates in Acacia seeds for restoration projects.",
      link: "http://scienceandnature.org/IJABR_Vol3(1)2013/IJABR_V3(1)21.pdf"
    },
    {
      id: 15,
      title: "Enhancing Seed Germination of Acacia tortilis by Breaking Dormancy",
      journal: "Qatar Foundation Annual Research Forum Proceedings, 2012",
      year: 2012,
      description: "Research on various treatments to overcome seed dormancy in Acacia tortilis, improving propagation success for conservation.",
      link: "http://www.qscience.com/doi/abs/10.5339/qfarf.2012.EEPS8"
    },
    {
      id: 16,
      title: "Effect of Preservation Periods on Seed Viability of Balanites aegyptica in Gene Banks",
      journal: "Catrina (The Egyptian Society for Environmental Sciences), 2009, Vol. 4(2)",
      year: 2009,
      description: "Long-term study on seed viability maintenance under different gene bank storage conditions and durations.",
      link: "http://www.catrinajournal.com/paper_info/id/117"
    }
  ];

  const books = [
    {
      id: 1,
      title: "Biological Diversity in Qatar and Conservation of Plant Genetic Resources in Gene Banks",
      publisher: "Ministry of Municipality and Environment, Qatar",
      year: 2022,
      language: "Arabic",
      description: "Comprehensive guide on Qatar's biodiversity and gene bank conservation strategies for plant genetic resources and food security.",
      link: "https://www.mme.gov.qa/static/biological/biological.pdf"
    },
    {
      id: 2,
      title: "Illustrated Guide to Plant Herbarium",
      publisher: "Ministry of Municipality, Qatar",
      year: 2022,
      language: "Arabic",
      description: "Visual reference guide for herbarium specimen collection, preparation, mounting, and conservation techniques.",
      link: "https://www.mm.gov.qa/static/cat_doc/Illustrated/dalil.pdf"
    },
    {
      id: 3,
      title: "Status of Some Plant Genetic Resources in Egypt: Rangeland Trees and Shrubs",
      publisher: "ISBN 978-977-90-9576-9",
      year: 2021,
      language: "Arabic",
      description: "Documentation of the current status of important rangeland plant genetic resources in Egypt.",
      link: null
    },
    {
      id: 4,
      title: "Acacia Tree: Between Heritage and Environment in Qatar's Wilderness",
      publisher: "Independent Publication",
      year: 2019,
      language: "Arabic",
      description: "Exploration of the cultural significance and ecological importance of Acacia trees in Qatar's natural heritage.",
      link: null
    }
  ];

  const theses = [
    {
      id: 1,
      title: "Ecophysiological Studies of Some Acacia Species Grown in Egyptian Deserts and their Conservation in Gene Bank",
      type: "Ph.D. Thesis",
      institution: "Suez Canal University, Faculty of Environmental Agricultural Sciences",
      year: 2013,
      description: "Comprehensive research on the ecophysiology of Acacia species in desert environments and development of conservation protocols."
    },
    {
      id: 2,
      title: "Effect of Periods and Conditions of Preservation in Gene Banks on Seed Viability of Some Wild Plants",
      type: "M.Sc. Thesis",
      institution: "Suez Canal University, Faculty of Environmental Agricultural Sciences",
      year: 2008,
      description: "Investigation of optimal storage conditions and their effects on long-term seed viability in gene bank collections."
    }
  ];

  const handleCardClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const renderPublicationCard = (pub, viewType) => (
    <div 
      key={pub.id}
      className={`publication-card ${pub.link ? 'clickable' : ''}`}
      onClick={() => handleCardClick(pub.link)}
    >
      {viewType === 'list' && (
        <div className="publication-year-badge">
          <div className="publication-year">{pub.year}</div>
        </div>
      )}
      <div className={viewType === 'list' ? 'publication-content' : ''}>
        {viewType === 'grid' && (
          <div className="publication-year">{pub.year}</div>
        )}
        <h3 className="publication-card-title">{pub.title}</h3>
        <div className="publication-journal">
          <JournalIcon />
          {pub.journal}
        </div>
        <p className="publication-description">{pub.description}</p>
        {pub.link && (
          <div className="publication-link">View Publication →</div>
        )}
      </div>
    </div>
  );

  const renderBookCard = (book, viewType) => (
    <div 
      key={book.id}
      className={`publication-card ${book.link ? 'clickable' : ''}`}
      onClick={() => handleCardClick(book.link)}
    >
      {viewType === 'list' && (
        <div className="publication-year-badge">
          <div className="book-year">
            <BookIcon />
            {book.year}
          </div>
        </div>
      )}
      <div className={viewType === 'list' ? 'publication-content' : ''}>
        <div className="book-card-header">
          {viewType === 'grid' && (
            <span className="book-year">
              <BookIcon />
              {book.year}
            </span>
          )}
          <span className="book-language-badge">{book.language}</span>
        </div>
        <h3 className="publication-card-title">{book.title}</h3>
        <div className="book-publisher">
          <BuildingIcon />
          {book.publisher}
        </div>
        <p className="book-description">{book.description}</p>
        {book.link && (
          <div className="publication-link">View Book →</div>
        )}
      </div>
    </div>
  );

  const renderThesisCard = (thesis, viewType) => (
    <div key={thesis.id} className="publication-card">
      {viewType === 'list' && (
        <div className="publication-year-badge">
          <div className="thesis-year">
            <GraduationIcon />
            {thesis.year}
          </div>
        </div>
      )}
      <div className={viewType === 'list' ? 'publication-content' : ''}>
        <div className="thesis-card-header">
          {viewType === 'grid' && (
            <span className="thesis-year">
              <GraduationIcon />
              {thesis.year}
            </span>
          )}
          <span className="thesis-type-badge">{thesis.type}</span>
        </div>
        <h3 className="publication-card-title">{thesis.title}</h3>
        <div className="thesis-institution">
          <BuildingIcon />
          {thesis.institution}
        </div>
        <p className="thesis-description">{thesis.description}</p>
      </div>
    </div>
  );

  return (
    <div className="publications-page">
      <div className="publications-container">
        <div className="publications-header">
          <center>
            <h1 className="publications-title">Publications</h1>
            <p className="publications-subtitle">
              Research contributions in plant genetics, conservation, and agricultural sciences
            </p>
          </center>
        </div>

        {/* Journal Articles and Conference Papers */}
        <section className="publications-section">
          <div className="section-header">
            <h2 className="section-title">Journal Articles & Conference Papers</h2>
            <div className="view-toggle">
              <button 
                className={`view-toggle-btn ${articlesView === 'grid' ? 'active' : ''}`}
                onClick={() => setArticlesView('grid')}
              >
                <GridIcon /> Grid
              </button>
              <button 
                className={`view-toggle-btn ${articlesView === 'list' ? 'active' : ''}`}
                onClick={() => setArticlesView('list')}
              >
                <ListIcon /> List
              </button>
            </div>
          </div>
          
          <div className={articlesView === 'grid' ? 'publications-grid' : 'publications-list'}>
            {publications.map(pub => renderPublicationCard(pub, articlesView))}
          </div>
        </section>

        {/* Books */}
        <section className="publications-section">
          <div className="section-header">
            <h2 className="section-title">Books & Monographs</h2>
            <div className="view-toggle">
              <button 
                className={`view-toggle-btn ${booksView === 'grid' ? 'active' : ''}`}
                onClick={() => setBooksView('grid')}
              >
                <GridIcon /> Grid
              </button>
              <button 
                className={`view-toggle-btn ${booksView === 'list' ? 'active' : ''}`}
                onClick={() => setBooksView('list')}
              >
                <ListIcon /> List
              </button>
            </div>
          </div>
          
          <div className={booksView === 'grid' ? 'publications-grid' : 'publications-list'}>
            {books.map(book => renderBookCard(book, booksView))}
          </div>
        </section>

        {/* Theses */}
        <section className="publications-section">
          <div className="section-header">
            <h2 className="section-title">Academic Theses</h2>
            <div className="view-toggle">
              <button 
                className={`view-toggle-btn ${thesesView === 'grid' ? 'active' : ''}`}
                onClick={() => setThesesView('grid')}
              >
                <GridIcon /> Grid
              </button>
              <button 
                className={`view-toggle-btn ${thesesView === 'list' ? 'active' : ''}`}
                onClick={() => setThesesView('list')}
              >
                <ListIcon /> List
              </button>
            </div>
          </div>
          
          <div className={thesesView === 'grid' ? 'publications-grid' : 'publications-list'}>
            {theses.map(thesis => renderThesisCard(thesis, thesesView))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PublicationsPage;