// Burger.styled.js
import styled from "styled-components";
import { bool, func } from "prop-types";

const ToggleButton = ({ open, onClick }) => {
  return (
    <StyledToggleButton open={open} onClick={onClick}>
      <div />
      <div />
      <div />
    </StyledToggleButton>
  );
};

export const StyledToggleButton = styled.button`
  display: none;
  position: fixed;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    top: 20px;
    left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;

    transition: all 0.3s linear;
    transform-origin: 1px;


    cursor: pointer;
    z-index: 100;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: black;
      border-radius: 20px;
      transition: all 0.3s linear;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

ToggleButton.propTypes = {
  open: bool.isRequired,
  onClick: func.isRequired,
};

export default ToggleButton;
