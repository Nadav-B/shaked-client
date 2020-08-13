import React from "react";
import {useState} from "react";
import ToggleButton from "../elements/ToggleButton";
import PropTypes from "prop-types";
import SizeWrapper from "../elements/SizeWrapper";
import Link from "next/link";
import styled from "styled-components";

const Header = ({ menuLinks, siteTitle }) => {

  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper>
      <NavigationWrapper>
        <StyledLink>
          <Link href={"/homepage"}>
            <SizeWrapper height={120} width={120}>
              <img src="logos/favicon.svg" alt="Logo" />
            </SizeWrapper>
          </Link>
        </StyledLink>
        <ToggleButton/>
        <StyledNavigation >

          <ul>
            {menuLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </StyledNavigation>
      </NavigationWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-left: 12px;
  padding-right: 42px;
`;

const StyledNavigation = styled.nav`
  display: inline-block;
  height: auto;

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


const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const StyledLink = styled.div`
  display: inline-block;
  height: 100%;
  margin-left: 20px;
`;

export default Header;
