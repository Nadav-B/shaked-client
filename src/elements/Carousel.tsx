import styled from "@emotion/styled";
import * as React from "react";
import {useState} from "react";
import Flex from "./Flex";

interface SliderProps {
    items: any;
}

const Carousel: React.FC<SliderProps> = ({items}) => {
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
`

const StyledCarousel = styled.div`
  width: 90%;
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

  background: ${({active}) => (active ? "#0a589d" : "grey")};

  :hover {
    background-color: ${(p) => p.theme.colors.dimGray};
`;

export default Carousel;
