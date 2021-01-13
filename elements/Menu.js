// Burger.styled.js
import styled from "styled-components";
import Link from "next/link";
import { bool, func } from "prop-types";
import { useAuth } from "../shared/auth";

const Menu = ({  menuLinks, open, onClick }) => {

  const { isAuthenticated,logout } = useAuth();

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
        {isAuthenticated && [
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
              <a className="admin">התנתק</a>
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
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 120px;
  background: white;
  z-index: 1;
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

  ul {
    position: relative;
    top: 50px;
    right: 150px;
  }
  a {
    display: block;
    margin-top: 15px;
  }

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    height: 100%;
    background: white;

    li {
      direction: rtl;
      float: none;
      margin: auto;
      text-align: center;
      min-height: 50px;
      border-width: 5px;
      border-top-style: solid;
      border: 1px solid rgba(228, 228, 228, 0.2);
      position: relative;
    }

    ul {
      position: relative;
      top: 150px;
      right: 0;
    }
    a {
      display: block;
      height: 100%;
    }
  }
`;

Menu.propTypes = {
  open: bool.isRequired,
  onClick: func.isRequired,
};
export default Menu;
