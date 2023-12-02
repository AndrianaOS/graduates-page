import React, { useState, useEffect } from "react";
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

  console.log(graduateData);

  return (
    <div>
      <section>
        <h1>See all our wonderful Graduates</h1>
        <div>
          {graduateData.length > 0 &&
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
                </section>

                <p>{graduate.db_data.role} developer</p>
              </aside>
            ))}
        </div>
      </section>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default GraduatesPage;
