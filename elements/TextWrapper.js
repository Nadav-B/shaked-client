// Burger.styled.js
import styled from "styled-components";

const TextWrapper = styled.div`
  margin: auto;
  max-width: 700px;

  @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export default TextWrapper;
