import React, { useState, useEffect } from "react";
import "./graduatePage.css";
import { Link } from "react-router-dom";

const GraduatesPage = () => {
  const [graduateData, setGraduateData] = useState([]);

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

  //   TO BE USED TO FETCH DATA FROM GITHUB GRAPHQL API
  // async function getAllGraduatesGithub() {
  //   try {
  //     const response = await fetch("http://127.0.0.1:5000/allGraduates");

  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.error}`);
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //     setGraduateData(data);
  //     return data;
  //   } catch (error) {
  //     console.log("Error message:", error);
  //   }
  // }

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
              <aside key={graduate.id} className="graduate-data">
                <div className="photo">Image</div>
                <p>{graduate.name}</p>
                <p>
                  <a href={graduate.cv_link}>CV</a>
                </p>
                <p>
                  <a href={graduate.github_url}>GitHub</a>
                </p>
                <p>{graduate.role} developer</p>
              </aside>
            ))}
        </div>
      </section>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default GraduatesPage;
