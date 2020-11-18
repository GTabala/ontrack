import React, { useState } from "react";
import Button from "./Button";

const NewStudent = ({addNew} ) => {
const [studentName, setStudentName] = useState("");

const submitForm = (e) => {
  e.preventDefault();
  setStudentName(e.target.value);
};
const holderStudentName = (e) => {
// e.preventDefault();
  setStudentName(e.target.value);
};

  return (
    <div className="moda">
    <form onSubmit={submitForm}>
    <input type="text"
    placeholder="Student name"
    name="studentName"
    value={studentName}
    onChange={holderStudentName}
    />
    <Button addNew={addNew} btnName="Submit" />
    </form>
    </div>
  );
};

export default NewStudent;