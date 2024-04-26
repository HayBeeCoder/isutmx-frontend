import React from "react";

const Button = ({ children }) => {
  return (
    <button
      style={{
        pading: "20px 40px",
        background: "green",
        color: "white",
        letterSpacing: "1.5",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
