import React from 'react';
import styled from '@emotion/styled';

const Button = ({ children, onClick, focus }) => (
  <StyledButton>
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 172px;
  padding: 0 10px;
  background: ${p => p.theme.colors.lightGrey};
  border: ${p => p.theme.colors.darkGrey};;
  border-radius: 3px;
  outline: none;
  color: ${p => p.theme.colors.navyBlue};
  cursor: pointer;
  transition: background-color 0.2 ease, color 0.2 ease;

  &:hover {
    background-color: ${p => p.theme.colors.whiteSmoke};
  }

  &:focus,
  &:active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.torchRed};
    outline: none;
  }

  ::-moz-focus-inner {
    border: 0;
  }
`;

export default StyledButton;
