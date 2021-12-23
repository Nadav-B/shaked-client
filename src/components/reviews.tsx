import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../elements/Wrapper";


import reviews from "../../public/reviews/reviews.json";


const Reviews: React.FC<{}> = ({}) => {
  return (
    <Wrapper>
      <h1> מה לקוחות אומרים עלינו?</h1>

{reviews.map (item=> item.content)}
    </Wrapper>
  );
};

export default Reviews;
