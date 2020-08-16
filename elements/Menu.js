// Burger.styled.js
import styled from "styled-components";
import Link from "next/link";
import { bool, func } from "prop-types";

const Menu = ({ menuLinks, open, onClick }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        {menuLinks.map((link) => (
          <li onClick={onClick} key={link.name}>
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: inline-block;
  height: auto;
z-index:1;
  li {
    cursor: pointer;
    float: right;
    margin-left: 3vw;
    color: black;
    text-align: center;
  }
  @media (max-width: 768px) {

      position: fixed;
      top: 120px;
      left: 0;
      right: 0;
      height: 100%;
      background: white;
      li {
        direction: rtl;
        width: auto;
        float: none;
        margin: auto;
        text-align: center;
        padding: 20px;
        border-width: 5px;
        border-top-style: solid;
        border: 1px solid rgba(228, 228, 228, 0.2);
      }
    }
  }
`;

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Menu;
