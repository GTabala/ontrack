import React, { useState } from "react";
import Button from "./Button";
import EnterValue from "./EnterValue";

const NewStudent = ({ addNew }) => {
  const [classes, setClasses] = useState(["West Midlands 1", "London 7", "Manchester United"]);
  const [studentName, setStudentName] = useState("");
  const [gitHubId, setGitHubId] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [addClass, setAddClass] = useState(false);

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
    if (e.target.value === "addClass") {
      setAddClass(!addClass);
    } else {
      setStudentClass(e.target.value);
    }
  };

  const addClassFunc = (val) => {
    setClasses(classes.concat(val));
    setAddClass(!addClass);
    console.log(classes);
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
        <br />
        <label for="gitHubId">GitHub ID: </label>
        <input
          type="text"
          placeholder="GitHub ID"
          id="gitHubId"
          name="gitHubId"
          value={gitHubId}
          onChange={holderGitHubId}
        />
        <br />
        <label for="studentClass">Class: </label>
        <select
          id="studentClass"
          name="studentClass"
          value={studentClass}
          onChange={holderClass}
        >
          <option>Select class</option>
          {classes.map((item) => (
            <option value={item}>{item}</option>
          ))}
          <option value="addClass">Add new class</option>
        </select>
        {addClass && (
          <EnterValue labelForm="Enter new class" add={addClassFunc} />
        )}
        <Button addNew={addNew} btnName="Submit" />
      </form>
    </div>
  );
};

export default NewStudent;
