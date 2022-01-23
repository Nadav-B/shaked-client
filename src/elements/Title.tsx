import styled from "@emotion/styled";
import * as React from "react";
import Flex from "./Flex";

interface TitleProps {}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.h1`
  color: black;
  font-weight: bold;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    text-align: right;
    margin-right: 30px;
  }
`;

export default Title;
