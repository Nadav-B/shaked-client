import styled from "@emotion/styled";
import * as React from "react";
import { useState } from "react";
import Flex from "./Flex";

interface SliderProps {
  items: [any];
}

const Carousel: React.FC<SliderProps> = ({ items }) => {
  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  const [currentChunk, setCurrentChucnk] = useState(0);


  const chunks = sliceIntoChunks(items, 3);

  return (
    <div>
      <Flex alignItems="center" justifyContent="center">
        {chunks[currentChunk].map((element) => {
          return element;
        })}
      </Flex>

      <Slider>
        {chunks.map((value, index)=> {
          console.log(value, index);
          return <StyledButton onClick={()=> setCurrentChucnk(index)}> </StyledButton>;
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
const StyledButton = styled.button`
margin-right: 10px;
margin-left: 10px;
width: 40px;
border: 0;
border-radius: 25px;

height:4px;
background-color: ${(p) => p.theme.colors.darkGrey};
cursor: pointer;



:hover {
  background-color: ${(p) => p.theme.colors.dimGray};
`;

export default Carousel;
