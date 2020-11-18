import React, { useState } from "react";
import Button from "./Button";

const NewStudent = ({ addNew }) => {
  const classes = ["West Midlands 1", "London 7", "Manchester United"];
  const [studentName, setStudentName] = useState("");
  const [gitHubId, setGitHubId] = useState("");
  const [studentClass, setStudentClass] = useState("");
  

  const submitForm = (e) => {
    e.preventDefault();
  };
  const holderStudentName = (e) => {
    setStudentName(e.target.value);
  };
  const holderGitHubId = (e) => {
    setGitHubId(e.target.value);
  };
  const holderClass = (e) => {
    setStudentClass(e.target.value);
  };

  return (
    <div className="moda">
      <form onSubmit={submitForm}>
      <label for="studentName">Name: </label>
        <input
          type="text"
          placeholder="Student name"
          id="studentName"
          name="studentName"
          value={studentName}
          onChange={holderStudentName}
        />
        <br/>
      <label for="gitHubId">GitHub ID: </label>
        <input
          type="text"
          placeholder="GitHub ID"
          id="gitHubId"
          name="gitHubId"
          value={gitHubId}
          onChange={holderGitHubId}
        />
        <br/>
      <label for="studentClass">Class: </label>
        <select
           id="studentClass"
          name="studentClass"
          value={studentClass}
          onChange={holderClass}
        >
          <option>Select class</option>
          {classes.map(item => <option value={item}>{item}</option> )}
        </select>

        <Button addNew={addNew} btnName="Submit" />
      </form>
    </div>
  );
};

export default NewStudent;
