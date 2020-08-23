// Burger.styled.js
import styled from "styled-components";
import Link from "next/link";
import { bool, func } from "prop-types";
import api from "../shared/api";
const Menu = ({ menuLinks, open, onClick }) => {
  const logout = () => {
    api.logout();
  };

  return (
    <StyledMenu open={open}>
      <ul>
        {menuLinks.map((link) => (
          <li onClick={onClick} key={link.name}>
            <Link href={link.link}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
        {api.isAuthenticated() && [
          <li key="admin" onClick={onClick}>
            <Link href={"/admin"}>
              <a>עמוד מנהל</a>
            </Link>
          </li>,
          <li
            key="logout"
            className="admin"
            onClick={() => {
              logout();
              onClick();
            }}
          >
            <Link href={"/homepage"}>
              <a>התנתק</a>
            </Link>
          </li>,
        ]}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  height: auto;
  display: block;
  position:fixed;
  right:150px;
  z-index:1;
  li {
    cursor: pointer;
    float: right;
    margin-left: 3vw;
    color: black;
    text-align: center;
  }

  .admin {
    color: red;
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
  onClick: func.isRequired,
};
export default Menu;
