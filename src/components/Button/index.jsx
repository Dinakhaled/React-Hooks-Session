import React from "react";

const Button = ({ text = "Count", onClick }) => {
  console.log("button render");
  return (
    <button className="btn btn-primary " onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
