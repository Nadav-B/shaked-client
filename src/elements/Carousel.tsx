import styled from "@emotion/styled";
import * as React from "react";
import { useState } from "react";
import Flex from "./Flex";

interface SliderProps {
  items: any;
}

const Carousel: React.FC<SliderProps> = ({ items }) => {
  return (
    <StyledCarousel>
      <StyledFlex>
        {items.map((element) => {
          return element;
        })}
      </StyledFlex>
    </StyledCarousel>
  );
};

const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;

const StyledCarousel = styled.div`
  width: 90%;
`;

export default Carousel;
