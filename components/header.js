import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import logo from "../assets/logos/shaked.png"
import SizeWrapper from "../elements/SizeWrapper"

const Header = ({ siteTitle, menuLinks }) => (
  <HeaderWrapper>
    <NavigationWrapper>
      <StyledLink>
        <Link to="/homepage">
          <SizeWrapper height={150} width={150}>
            <img src={logo} alt={siteTitle} />
          </SizeWrapper>
        </Link>
      </StyledLink>
      <StyledNavigation>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </StyledNavigation>
    </NavigationWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-left: 12px;
  padding-right: 42px;
`

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
`

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

const StyledLink = styled.div`
  display: inline-block;
  height: 100%;
  margin-left: 20px;
`

export default Header
