import React, { useState, useEffect, useMemo } from "react";
import "./graduatePage.css";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import cvIcon from "../../images/cv.webp";
import portfolioIcon from "../../images/portfolio.webp";
import emailIcon from "../../images/email.webp";
import githubIcon from "../../images/github.webp";
import linkedinIcon from "../../images/linkedin.webp";

const GraduatesPage = () => {
  const [graduateData, setGraduateData] = useState([]);

  async function getAllGraduates() {
    try {
      const response = await fetch(
        "https://graduates-server.onrender.com/allGraduates"
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.error}`);
      }

      const data = await response.json();
      console.log(data);
      setGraduateData(data);
      return data;
    } catch (error) {
      console.log("Error message:", error);
    }
  }

  useEffect(() => {
    getAllGraduates();
  }, []);

  const memoizedGraduates = useMemo(() => {
    return graduateData.map((graduate) => ({
      id: graduate.db_data.id,
      avatarUrl: graduate.github_data.data.user.avatarUrl,
      name: graduate.db_data.name,
      bio: graduate.github_data.data.user.bio,
      cvLink: graduate.db_data.cv_link,
      githubLink: graduate.db_data.github_url,
      email: graduate.github_data.data.user.email,
      linkedInLink: graduate.github_data.data.user.socialAccounts.nodes.map(
        (data) => data.url
      ),
      websiteUrl: graduate.github_data.data.user.websiteUrl,
      role: graduate.db_data.role,
    }));
  }, [graduateData]);

  console.log(graduateData);

  return (
    <div>
      <section>
        <Heading headingName="Graduates" />
        <h1>See all our wonderful Graduates</h1>
        <div className="graduate-card">
          {memoizedGraduates.length > 0 &&
            memoizedGraduates.map((graduate) => (
              <aside key={graduate.id} className="graduate-data">
                <img
                  src={graduate.avatarUrl}
                  alt={`${graduate.name} Avatar`}
                  id="avatar"
                  loading="lazy"
                />
                <h2 id="grad-name">{graduate.name}</h2>
                <p className="grad-role" id="grad-role">
                  {graduate.role} Developer
                </p>
                <p className="bio" id="grad-bio">
                  <b>About Me:</b> {graduate.bio}
                </p>
                <section className="link-info" id="link-info">
                  <p id="grad-cv">
                    <a href={graduate.cvLink} className="socials name-icon">
                      <img src={cvIcon} alt="cv icon" className="icons" />
                      CV
                    </a>
                  </p>
                  <p id="grad-gh">
                    <a href={graduate.githubLink} className="socials name-icon">
                      <img
                        src={githubIcon}
                        alt="github icon"
                        className="icons"
                      />
                      GitHub
                    </a>
                  </p>
                  {graduate.email && (
                    <p id="grad-email">
                      <a href={graduate.email} className="socials name-icon">
                        <img
                          src={emailIcon}
                          alt="email icon"
                          className="icons"
                        />
                        Email
                      </a>
                    </p>
                  )}
                  <p id="grad-linkedin">
                    <a
                      href={graduate.linkedInLink}
                      className="socials name-icon"
                    >
                      <img
                        src={linkedinIcon}
                        alt="linkedin icon"
                        className="icons"
                      />
                      LinkedIn
                    </a>
                  </p>
                  {graduate.websiteUrl && (
                    <p id="grad-website">
                      <a
                        href={graduate.websiteUrl}
                        className="socials name-icon"
                      >
                        <img
                          src={portfolioIcon}
                          alt="portfolio icon"
                          className="icons"
                        />
                        Portfolio
                      </a>
                    </p>
                  )}
                </section>
              </aside>
            ))}
        </div>
      </section>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default GraduatesPage;
