import React from "react";
import "./Button.scss";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="btn-gb">
      {children}
    </button>
  );
};

export default Button;
