import React from "react";

const Button = ({ text = "Count" }) => {
  return <button className="btn btn-primary">{text}</button>;
};

export default Button;
