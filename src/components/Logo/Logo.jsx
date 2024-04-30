import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Title = styled.span`
  font-size: 3em;
  text-align: center;
  color: #1e0f0f;
  color: #6741d9;
  margin: 0;
  font-family: "Rampart One", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const Logo = () => {
  return (
    // <div>Logo</div>
    <Link
      to="/dashboard"
      style={{
        textDecoration: "none",
      }}
    >
      <Title>isUTMx</Title>
    </Link>
  );
};

export default Logo;
