// Burger.styled.js
import styled from "@emotion/styled";
import { bool, func } from "prop-types";

const ToggleButton = ({ open, onClick }) => {
  return (
    <StyledToggleButton open={open} onClick={onClick}>
      <div />
      <div />
    </StyledToggleButton>
  );
};

export const StyledToggleButton = styled.div`
  position: fixed;
  display: block;
  top: 20px;
  left: 22px;
  width: 375px;
  height: 146px;
  z-index: 103;

  width: 33px;
  @media (max-width: 768px) {
    cursor: pointer;

    div {
      box-sizing: border-box;
      width: 100%;
      transition: all 250ms ease-out;
      border: 1px solid #000000;
      margin-bottom: 11px;

      :first-child {
        transform: ${({ open }) =>
          open ? "rotate(45deg)  translate(0px, 10px)" : "rotate(0)"};
      }
      :nth-child(2) {
        transform: ${({ open }) =>
          open ? "rotate(-45deg)  translate(0px, -10px)" : "rotate(0)"};
      }
    }
  }
`;

ToggleButton.propTypes = {
  open: bool.isRequired,
  onClick: func.isRequired,
};

export default ToggleButton;
