import React, { useState } from "react";
import ToggleButton from "../elements/ToggleButton";
import Menu from "../elements/Menu";

import PropTypes from "prop-types";
import SizeWrapper from "../elements/SizeWrapper";
import Link from "next/link";
import styled from '@emotion/styled'


const Header = ({ menuLinks, siteTitle }) => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper open={open}>
      <StyledLogo>
        <Link href={"/"}>
          <a>
            <img src="/logos/favicon.svg" alt="שקד משכנאות" />
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
  background-color: white;
`;

const StyledLogo = styled.div`
  position: absolute;
  right: 20px;
  top: 0px;
  width: 50px;
  height: 50px;
  border-radius: 80px;
  z-index: 100;
  img {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
  }
`;

export default Header;
