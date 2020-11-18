import React, { useState } from "react";

const EnterValue = ({ labelForm, add }) => {
  const [newValue, setNewValue] = useState("");
  const changeValue = (e) => {
    setNewValue(e.target.value);
  };
  const sendValue = (e) => {
    e.preventDefault();

    add(newValue);
  };
  return (
    <div className="newValue">
      {labelForm}
      <form onSubmit={sendValue}>
        <input
          type="text"
          placeholder="Enter a name of a new class"
          id="gitHubId"
          name="gitHubId"
          value={newValue}
          onChange={changeValue}
        />
        <button className="btn" onClick={sendValue}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnterValue;
