import React from "react";

const Button = ({ addNew, btnName, pageNumber }) => {
  const action = () => {
    pageNumber ? addNew(pageNumber) : addNew();
  };

  return (
    <button className="btn btn-primary" onClick={action}>
      {btnName}
    </button>
  );
};

export default Button;
