import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./graduateForm.css";
import Button from "../../components/Button/Button.jsx";

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
    fetch("http://127.0.0.1:5000/submit_graduate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      <h2 className="form-title">Fill in this form to be added on the Graduates list</h2>
      <form method="post" onSubmit={handleSubmit} className="graduate-form">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
          className="form-text"
        >
          <TextField
            helperText="Name example: Jane Doe"
            className="demo-helper-text-aligned"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            helperText=" Link example: https://github.com/name"
            className="demo-helper-text-aligned"
            label="GitHub Link"
            name="github_url"
            value={formData.github_url}
            onChange={handleChange}
            required
          />
          <TextField
            helperText="Share link to CV"
            className="demo-helper-text-aligned"
            label="CV"
            name="cv_link"
            value={formData.cv_link}
            onChange={handleChange}
            required
          />
        </Box>
        <fieldset id="role" className="role-area" required>
          <legend>Role</legend>
          <aside className="role-selection">
            <label htmlFor="fullstack">Full Stack</label>
            <input
              type="radio"
              id="fullstack"
              name="role"
              value="fullstack"
              checked={formData.role === "fullstack"}
              onChange={handleChange}
            />
          </aside>
          <aside className="role-selection">
            <label htmlFor="frontend">Frontend</label>
            <input
              type="radio"
              id="frontend"
              name="role"
              value="frontend"
              checked={formData.role === "frontend"}
              onChange={handleChange}
            />
          </aside>
        </fieldset>
        <span className="form-info">**All fields are required**</span>
        <Button buttonName="Submit" type="submit" />
      </form>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default GraduateForm;
