import styled from "@emotion/styled";
import * as React from "react";
import { useState } from "react";
import Flex from "./Flex";

interface SliderProps {
  items: [any];
}

const Carousel: React.FC<SliderProps> = ({ items }) => {


  

  const sliceIntoChunks=(arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  const [currentChunk, setCurrentChucnk] = useState(0);

  const chunks = sliceIntoChunks(items,5);

  return (
    <div>
      <Flex flexWrap="no-wrap" overflowX="auto" alignItems="center" justifyContent="center">
        {chunks[currentChunk].map((element) => {
          return element;
        })}
      </Flex>

      <Slider>
        {chunks.map((value, index) => {
          console.log(index== currentChunk)
          return (
            <StyledButton
            key={index}
              active={index == currentChunk}
              onClick={() => setCurrentChucnk(index)}
            >
              {" "}
            </StyledButton>
          );
        })}
      </Slider>
    </div>
  );
};
const Slider = styled.div`
  display: flex;
  align-items: center;
  
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
