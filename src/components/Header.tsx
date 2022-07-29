import React, { useState } from "react";
import { ToggleButton, Menu } from "../elements";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "@emotion/styled";

const Header = ({ menuLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper open={open}>
      <Background />
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
  display: flex;
  position: relative;
  width: auto;
  height: 146px;
`;

const Background = styled.div`
  position: absolute;
  background-color: #cff2ef;
  z-index: -10;
  width: 100%;
  height: 100%;
  opacity: 0.58;
`;

const StyledLogo = styled.div`
  width: 150px;
  margin-right: 20px;
  margin-top: 10px;
  z-index: 100;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    width: 200px;
  }
`;

export default Header;
