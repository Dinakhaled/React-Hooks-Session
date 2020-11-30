import React from "react";

const Button = ({ text = "Count", onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
