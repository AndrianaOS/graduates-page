import React, { useState, useEffect, useMemo } from "react";
import "./graduatePage.css";
import { Link } from "react-router-dom";

const GraduatesPage = () => {
  const [graduateData, setGraduateData] = useState([]);
  //   const [graduateGithubData, setGraduateGithubData] = useState([]);

  async function getAllGraduates() {
    try {
      const response = await fetch("http://127.0.0.1:5000/allGraduates");

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
        <h1>See all our wonderful Graduates</h1>
        <div>
          {memoizedGraduates.length > 0 &&
            memoizedGraduates.map((graduate) => (
              <aside key={graduate.id} className="graduate-data">
                <img src={graduate.avatarUrl} alt={`${graduate.name} Avatar`} />
                <h2>{graduate.name}</h2>
                <section className="link-info">
                  <p>
                    <a href={graduate.cvLink}>CV</a>
                  </p>
                  <p>
                    <a href={graduate.githubLink}>GitHub</a>
                  </p>
                  {graduate.email && (
                    <p>
                      <a href={graduate.email}>Email</a>
                    </p>
                  )}
                  <p>
                    <a href={graduate.linkedInLink}>LinkedIn</a>
                  </p>
                  {graduate.websiteUrl && (
                    <p>
                      <a href={graduate.websiteUrl}>Portfolio</a>
                    </p>
                  )}
                </section>
                <p>{graduate.role} Developer</p>
              </aside>
            ))}
          {/* {graduateData.length > 0 &&
            graduateData.map((graduate) => (
              <aside key={graduate.db_data.id} className="graduate-data">
                <img
                  src={graduate.github_data.data.user.avatarUrl}
                  alt={`${graduate.db_data.name} Avatar`}
                />
                <h2>{graduate.db_data.name}</h2>
                <p className="bio">{graduate.github_data.data.user.bio}</p>
                <section className="link-info">
                  <p>
                    <a href={graduate.db_data.cv_link}>CV</a>
                  </p>
                  <p>
                    <a href={graduate.db_data.github_url}>GitHub</a>
                  </p>
                  {graduate.github_data.data.user.email && (
                    <p>Email: {graduate.github_data.data.user.email}</p>
                  )}
                  <p>
                    <a
                      href={graduate.github_data.data.user.socialAccounts.nodes.map(
                        (data) => data.url
                      )}
                    >
                      LinkedIn
                    </a>
                  </p>
                  {graduate.github_data.data.user.websiteUrl && (
                    <p>
                      <a href={graduate.github_data.data.user.websiteUrl}>
                        Portfolio
                      </a>
                    </p>
                  )}
                </section>

                <p>{graduate.db_data.role} developer</p>
              </aside>
            ))} */}
        </div>
      </section>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default GraduatesPage;
