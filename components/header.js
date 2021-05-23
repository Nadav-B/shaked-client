import React, { useState } from "react";
import ToggleButton from "../elements/ToggleButton";
import Menu from "../elements/Menu";

import PropTypes from "prop-types";
import SizeWrapper from "../elements/SizeWrapper";
import Link from "next/link";
import styled from "styled-components";

const Header = ({ menuLinks, siteTitle }) => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper open={open}>
      <StyledLogo>
        <Link href={"/"}>
          <a>
            <img src="/logos/favicon.svg" alt="Logo" />
          </a>
        </Link>
      </StyledLogo>

      <Menu open={open} menuLinks={menuLinks} onClick={() => setOpen(!open)} />
      <ToggleButton open={open} onClick={() => setOpen(!open)} />
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


`;

const StyledLogo = styled.div`
  position: fixed;
  height: 150px;
  right: 20px;
  top: 5px;
  width: 150px;
  background: white;
  border-radius: 80px;
  padding: 20px;
  z-index: 100;
  img {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    height: 119.4px;
    width: 119px;
    margin-right: 0;

    margin-left: 10px;
    margin-top: 5px;
  }
`;

export default Header;
