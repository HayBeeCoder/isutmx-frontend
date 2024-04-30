import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 20px 40px;
  background: #6741d9;
  color: white;
  letterspacing: 1.5;
  border: 0px;
  width: 100%;
  margin: 0 auto;
  border-radius: 4px;
  font-size: 20px;
  letter-spacing: 0.06em;
  &:disabled {
    opacity: 0.3;
  }
`;

const Button = ({ onClick, children, disabled }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
