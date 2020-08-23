import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, focus, active }) => (
  <StyledButton active={active}>{children}</StyledButton>
);

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 172px;
  font-size: ${(p) => p.fontSize || p.theme.fontSize.normal};
  font-family: ${(p) => p.theme.fontFamily};
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  border: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: ${({ active }) => (active ? "#0a589d" : "white")};
  outline: none;
  color: ${({ active }) => (active ? "white" : "#0a589d")};

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
