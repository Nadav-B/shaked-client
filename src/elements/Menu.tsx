// Burger.styled.js
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import Link from "next/link";
import { bool, func } from "prop-types";
import { useAuth } from "../shared/auth";

const Menu = ({ menuLinks, open, onClick }) => {
  const { asPath } = useRouter();
  const { isAuthenticated, logout } = useAuth();

  return (
    <StyledMenu open={open}>
      <StyledUl open={open}>
        {menuLinks.map((link) => (
          <Link
            key={link.name}
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL + link.link}`}
          >
            <StyledLink active={asPath.endsWith(link.link)} onClick={onClick}>
              <a>{link.name}</a>
            </StyledLink>
          </Link>
        ))}

        {isAuthenticated && [
          <StyledLink key="admin" onClick={onClick}>
            <Link href={"/admin"}>
              <a>עמוד מנהל</a>
            </Link>
          </StyledLink>,
          <StyledLink
            key="logout"
            onClick={() => {
              logout();
              onClick();
            }}
          >
            <Link href={"/"}>
              <a>התנתק</a>
            </Link>
          </StyledLink>,
        ]}
      </StyledUl>
    </StyledMenu>
  );
};

const StyledLink = styled.li`
  margin-top: 20px;
  margin-right: 30px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `

  font-weight: bold;
`}

  @media screen and(max-width: ${(props) => props.theme.responsive.medium}) {
    margin: 0;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  margin: auto;
  align-items: flex-end;
  padding-right: 20px;
  list-style-type: none;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: fixed;
    height: 100%;
    align-items: center;
    width: 100%;
    flex-direction: column;
    right: 0;
    padding: 0;
    padding-top: 40px;
    background: white;
    z-index: 150;
  }
`;

const StyledMenu = styled.nav`
  display: block;
  width: 100%;
  height: 60px;
  z-index: 1;
  .admin {
    color: red;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    height: ${({ open }) => (open ? "100%" : "50px")};
    z-index: 101;

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
