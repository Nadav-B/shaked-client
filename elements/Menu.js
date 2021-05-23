// Burger.styled.js
import styled from "styled-components";
import Link from "next/link";
import { bool, func } from "prop-types";
import { useAuth } from "../shared/auth";

const Menu = ({ menuLinks, open, onClick }) => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <StyledMenu open={open}>
      <ul>
        {menuLinks.map((link) => (
          <Link key={link.name} href={link.link}>
            <li onClick={onClick}>
              <a>{link.name}</a>
            </li>
          </Link>
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
            <Link href={"/"}>
              <a className="admin">התנתק</a>
            </Link>
          </li>,
        ]}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  display: block;
  width: 100%;
  height: 90px;
  background: white;
  z-index: 1;

  ul {
    position: relative;
    top: 10px;
    right: 150px;
  }

  li {
    cursor: pointer;
    float: right;
    margin-top: 30px;
    margin-left: 2rem;
    margin-right: 3rem;
    color: black;
    text-align: center;
  }

  .admin {
    color: red;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: ${({ open }) => (open ? "100%" : "70px")};

    background: white;

    ul {
      display: ${({ open }) => (open ? "block" : "none")};
      position: relative;
      top: 150px;
      right: 0;
      background: white;
    }
    li {
      direction: rtl;
      margin: 0;
      padding: 20px;
      text-align: center;
      width: 100%;
      border-width: 5px;
      display: table-cell;
      position: relative;
      border-top-style: solid;
      border: 1px solid rgba(228, 228, 228, 0.2);
    }

    a {
      color: black;
      text-transform: uppercase;
      text-decoration: none;

      display: inline-block;
      position: relative;
    }
  }
`;

Menu.propTypes = {
  open: bool.isRequired,
  onClick: func.isRequired,
};
export default Menu;
