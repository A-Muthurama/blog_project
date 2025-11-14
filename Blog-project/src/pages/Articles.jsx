import React, { useState } from "react";
import "./Articles.css";

const articlesData = [
  {
    id: 1,
    category: "Plant Breeding",
    year: "2024",
    title:
      "Genotypic Selection Using Quantitative Trait Loci for Better Productivity under High Temperature Stress in Tomato",
    journal: "Horticulture Journal",
    description:
      "A comprehensive study on enhancing tomato yields under heat stress conditions using advanced genetic selection techniques and QTL mapping.",
    link: "https://doi.org/10.3390/horticulturae10080874",
  },
  {
    id: 2,
    category: "Genetic Resources",
    year: "2024",
    title:
      "Establishing Qatar’s First National Plant Gene Bank: Challenges and Opportunities",
    journal: "Conservation Biology",
    description:
      "An overview of the strategic planning and implementation of Qatar’s national gene bank for preserving native plant genetic diversity.",
    link: "",
  },
  {
    id: 3,
    category: "Ecology",
    year: "2021",
    title:
      "Salt Tolerance of Selected Halophytes in Qatar’s Coastal Zones",
    journal: "Scientific Reports",
    description:
      "Research on halophyte species adaptation mechanisms in Qatar’s saline environments and their potential for ecological restoration.",
    link: "https://doi.org/10.1038/s41598-021-89462-3",
  },
  {
    id: 4,
    category: "Conservation",
    year: "2018",
    title:
      "Distribution and Conservation Status of the Endangered Haloxylon persicum",
    journal: "Qatar Foundation Research Conference",
    description:
      "Field survey and analysis of Haloxylon persicum populations, providing critical data for conservation strategies of native flora.",
    link: "",
  },
  {
    id: 5,
    category: "EcoConservationogy",
    year: "2017",
    title:
      "Conservation of Medicinal Plants in Qatar for Food Security",
    journal: "Journal of Ethnobotany",
    description:
      "Documentation of traditional medicinal plants and their role in food security and cultural heritage preservation in Qatar.",
    link: "https://doi.org/10.13140/RG.2.2.32403.99367",
  },
  {
    id: 6,
    category: "Genetic Resources",
    year: "2013",
    title:
      "Effect of Storage Conditions on Seed Viability in Acacia Species",
    journal: "Seed Science and Technology",
    description:
      "Investigation of optimal storage conditions for maintaining long-term seed viability in gene bank collections of Acacia species.",
    link: "",
  },
  {
    id: 7,
    category: "Ecology",
    year: "2014",
    title:
      "Ecophysiological Adaptations of Native Desert Plants to Drought",
    journal: "Arid Land Research and Management",
    description:
      "Analysis of physiological and morphological adaptations that enable desert plants to survive in extreme arid conditions.",
    link: "",
  },
  {
    id: 8,
    category: "Plant Breeding",
    year: "2019",
    title:
      "Mutation Breeding Techniques for Crop Improvement in Arid Regions",
    journal: "Plant Mutation Reports",
    description:
      "Application of induced mutation techniques to develop stress-tolerant crop varieties suitable for cultivation in arid environments.",
    link: "",
  },
  {
    id: 9,
    category: "Conservation",
    year: "2020",
    title:
      "Biodiversity Assessment of Qatar’s Native Flora",
    journal: "Biodiversity and Conservation",
    description:
      "Comprehensive biodiversity survey documenting plant species richness, distribution patterns, and conservation priorities in Qatar.",
    link: "",
  },
  {
    id: 10,
    category: "Ecology",
    year: "2022",
    title:
      "Soil Salinity Management for Sustainable Agriculture in Qatar",
    journal: "Agricultural Water Management",
    description:
      "Strategies for managing soil salinity to improve crop productivity and sustainability in Qatar’s agricultural systems.",
    link: "",
  },
];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Genetic Resources",
    "Ecology",
    "Plant Breeding",
    "Conservation",
    "EcoConservationogy",
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articlesData
      : articlesData.filter((a) => a.category === selectedCategory);

  return (
    <div className="articles-page">
      <h3 className="section-subtitle">Research Articles</h3>
      <p className="section-desc">
        Peer-reviewed publications and research contributions
      </p>

      <div className="filter-section">
        <span className="filter-label">Filter by category:</span>
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="articles-grid">
        {filteredArticles.map((article) => (
          <div key={article.id} className="article-card">
            <div className="article-header">
              <span className="category">{article.category}</span>
              <span className="year">{article.year}</span>
            </div>
            <h4 className="article-title">{article.title}</h4>
            <p className="journal">{article.journal}</p>
            <p className="description">{article.description}</p>
            {article.link && (
              <a
                href={article.link}
                className="read-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Article ↗
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="stats-section">
        <div className="stat">
          <h3>30+</h3>
          <p>Published Articles</p>
        </div>
        <div className="stat">
          <h3>500+</h3>
          <p>Citations</p>
        </div>
        <div className="stat">
          <h3>15+</h3>
          <p>International Journals</p>
        </div>
      </div>
    </div>
  );
}



