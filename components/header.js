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
    <HeaderWrapper>
      <NavigationWrapper>
        <Link passHref href={"/homepage"}>
          <StyledLink>
            <SizeWrapper height={120} width={120}>
              <img src="logos/favicon.svg" alt="Logo" />
            </SizeWrapper>
          </StyledLink>
        </Link>

        {open && <Menu menuLinks={menuLinks} open={open} setOpen={setOpen} />}
        <ToggleButton open={open} setOpen={setOpen} />
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

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const StyledLink = styled.div`
  display: inline-block;
  height: 100%;
  cursor: pointer;
  margin-left: 20px;
`;

export default Header;
