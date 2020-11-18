import React from "react";

const Button = ({addNew, btnName}) => {

  return (
    <div className="btn-add">
<button className="btn btn-primary" onClick={addNew}>{btnName}</button>
    </div>
  );
};

export default Button;