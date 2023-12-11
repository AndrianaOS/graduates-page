import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./graduateForm.css";
import Heading from "../../components/Heading/Heading";
// import Button from "../../components/Button/Button.jsx";

const GraduateForm = () => {
  const initialState = {
    name: "",
    github_url: "",
    role: "",
    cv_link: "",
  };

  const [formData, setFormData] = useState(initialState);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://graduates-server.onrender.com/submit_graduate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://graduates-server.onrender.com",
      },
      body: JSON.stringify({
        name: formData.name,
        github_url: formData.github_url,
        role: formData.role,
        cv_link: formData.cv_link,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Print this", data);
        setFormData(initialState);
      })
      .catch((error) => console.log(error));
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Heading headingName="Form" />
      <h2 className="form-title">
        Fill in this form to be added on the Graduates list
      </h2>
      <form method="post" onSubmit={handleSubmit} className="graduate-form">
        <Box
          sx={{
            display: "grid",
            alignItems: "baseline",
            "& > :not(style)": { m: 1 },
          }}
          className="form-text"
        >
          <TextField
            helperText="Name example: Jane Doe"
            id="name-field"
            className="demo-helper-text-aligned"
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            helperText=" Link example: https://github.com/name"
            id="github-field"
            className="demo-helper-text-aligned"
            label="GitHub Link"
            name="github_url"
            type="url"
            value={formData.github_url}
            onChange={handleChange}
            required
          />
          <TextField
            helperText="Share link to CV"
            id="cv-field"
            className="demo-helper-text-aligned"
            label="CV"
            name="cv_link"
            type="url"
            value={formData.cv_link}
            onChange={handleChange}
            required
          />
          <fieldset id="role" className="role-area" required>
            <legend>Role</legend>
            <aside className="role-selection">
              <label htmlFor="fullstack">Full Stack</label>
              <input
                type="radio"
                id="fullstack"
                name="role"
                value="Fullstack"
                checked={formData.role === "Fullstack"}
                onChange={handleChange}
              />
            </aside>
            <aside className="role-selection">
              <label htmlFor="frontend">Frontend</label>
              <input
                type="radio"
                id="frontend"
                name="role"
                value="Frontend"
                checked={formData.role === "Frontend"}
                onChange={handleChange}
              />
            </aside>
          </fieldset>
        </Box>
        {/* <fieldset id="role" className="role-area" required>
          <legend>Role</legend>
          <aside className="role-selection">
            <label htmlFor="fullstack">Full Stack</label>
            <input
              type="radio"
              id="fullstack"
              name="role"
              value="Fullstack"
              checked={formData.role === "Fullstack"}
              onChange={handleChange}
            />
          </aside>
          <aside className="role-selection">
            <label htmlFor="frontend">Frontend</label>
            <input
              type="radio"
              id="frontend"
              name="role"
              value="Frontend"
              checked={formData.role === "Frontend"}
              onChange={handleChange}
            />
          </aside>
        </fieldset> */}
        <span className="form-info" id="form-info">
          **All fields are required**
        </span>
        {/* <Button buttonName="Submit" type="submit" id="submit-btn"/> */}
        <div className="button-space">
          <button className="btn" id="submit-btn">
            Submit
          </button>
        </div>
      </form>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
};

export default GraduateForm;
