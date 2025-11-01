import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">
      {/* Intro Section */}
      <section className="about-intro">
        <h1>Meet Dr. Elsayed M. Elazazi</h1>
        <p className="intro-subtitle">
          A leading expert in plant genetic resources and ecological research
        </p>

        <div className="about-grid">
          {/* Left Content */}
          <div className="about-details">
            <p>
              Dr. Elsayed Mohammed El-Azazi is a distinguished researcher in
              Plant Genetic Resources and Ecological Research with over 20 years
              of dedicated work in environmental conservation and sustainable
              agriculture. His expertise spans biodiversity preservation,
              climate-resilient crop varieties, and establishing comprehensive
              gene banks for future generations.
            </p>

            <p>
              Currently serving as a Plant Genetic Resources Expert at the
              Ministry of Municipality, Qatar, Dr. Elazazi leads key research
              initiatives in genetic resources and ecological restoration. His
              research has significantly contributed to biodiversity
              conservation in harsh environments and strategies for sustainable
              land use.
            </p>

            <section className="role-section">
              <h3>Current Role</h3>
              <p>
                <strong>Plant Genetic Resources Expert</strong> — Ministry of
                Municipality, Qatar
              </p>
            </section>

            <section className="languages-section">
              <h3>Languages</h3>
              <div className="language-tags">
                <span className="tag">Arabic (Native)</span>
                <span className="tag">English (Fluent)</span>
              </div>
            </section>

            <section className="education-section">
              <h3>Education </h3>
              <div className="edu-card">
                <strong>Ph.D. in Environmental Sciences</strong>
                <p>Ecophyslological Studies of Acacla Species</p>
                <p>Suez Canal University, 2013</p>
              </div>
              <div className="edu-card">
                <strong>M.Sc. in Environmental Sciences</strong>
                <p>Seed viability and preservation in Gene Banks</p>
                <p>Suez Canal University, 2008</p>
              </div>
              <div className="edu-card">
                <strong>B.Sc. in Agricultural Sciences</strong>
                <p> Bontany and Plant Ecology</p>
                <p>Suez Canal University, 2002</p>
              </div>
            </section>

            <section className="highlights-section">
              <h3>Professional Highlights</h3>
              <ul>
                <li>
                  Lead Principal Investigator for Qatar Plant Gene Bank
                  (2025–2030) with 50M QAR funding
                </li>
                <li>
                  Principal Investigator for multiple IAEA collaborative research projects
                </li>
                <li>
                  Member of Qatar National Biodiversity Strategy Team (2025–2030)
                </li>
                <li>
                     Trainer and lecturer in national and international workshops on biodiversity.
                </li>
                <li>
                  Conducted over 15 international research projects in plant genetic resources
                </li>
                <li>
                  Published extensively in peer-reviewed journals and international conferences
                </li>
                <li>
                  Expert in gene bank management and seed consevation techniques.
                </li>
                <li>
                    Contributed to the conservation of endangered plant species in Qatar.
                </li>
              </ul>
            </section>

            <section className="collaboration-section">
              <h3>International Collaboration</h3>
              <div className="collab-grid">
                <div>
                  <h4>Research Partnerships</h4>
                  <ul>
                    <li>IAEA (International Atomic Energy Agency)</li>
                    <li>FAO (Food and Agriculture Organization)</li>
                    <li>
                      ICBA (International Center for Biosaline Agriculture)
                    </li>
                    <li>Chinese Academy of Sciences</li>
                    <li>
                      Multiple universities across the Middle East and North Africa
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>Professional Memberships</h4>
                  <ul>
                    <li>
                      IUCN - International Union for Conservation of Nature
                    </li>
                    <li>
                      Qatar National Biodiversity Strategy Team (2025–2030)
                    </li>
                    <li>Regional Biodiversity Expert Networks</li>
                    <li>International Gene Bank Management Associations</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="about-sidebar">
            <img
              src="/profile-img.png"
              alt="Dr. Elsayed M. Elazazi"
            />
          </aside>
        </div>
      </section>
    </main>
  );
}
export default About;
