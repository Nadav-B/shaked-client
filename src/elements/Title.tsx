import styled from "@emotion/styled";
import * as React from "react";
import Flex from "./Flex";

interface TitleProps {

}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.h1`

color: #3e2f5b;
margin: 20px;
font-weight: bold;

`;

export default Title;
