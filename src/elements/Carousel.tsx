import styled from "@emotion/styled";
import * as React from "react";
import { useState } from "react";
import Flex from "./Flex";

interface SliderProps {
  items: [any];
}

const Carousel: React.FC<SliderProps> = ({ items }) => {
  return (
      <Flex
        flexWrap="no-wrap"
        overflowX="auto"
        alignItems="center"
        justifyContent="flex-start"
      >
        {items.map((element) => {
          return element;
        })}
      </Flex>
  );
};
const Slider = styled.div`
  display: flex;
  align-items: center;

  ::-webkit-scrollbar { 
    display: none; 
    }

  justify-content: center;
`;

interface ButtonProps {
  active: boolean;
}

const StyledButton = styled.button<ButtonProps>`
margin-right: 20px;
margin-left: 20px;
width: 60px;
border: 0;
border-radius: 5px;
height: 5px;
cursor: pointer;

background: ${({ active }) => (active ? "#0a589d" : "grey")};

:hover {
  background-color: ${(p) => p.theme.colors.dimGray};
`;

export default Carousel;
