import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, focus }) => (
  <StyledButton>{children}</StyledButton>
);

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 172px;
  margin: 25px;
  max-width: 400px;
  border: 0;
  padding: 0 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;
  text-align: center;

  outline: none;
  color: ${(p) => p.theme.colors.navyBlue};
  cursor: pointer;

  &:hover {
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }



  &:disabled {
    cursor: not-allowed;
    background-color: ${(p) => p.theme.colors.darkGrey};

  }

  ::-moz-focus-inner {
    border: 0;
  }
`;

export default StyledButton;
