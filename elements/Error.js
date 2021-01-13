import styled from "styled-components";
import Title from "./Title";

const Error = () => {
  return (
    <Wrapper>
      <Title>שגיאה בטעינת העמוד</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  widht: 100%;
  margin: auto;
`;

export default Error;
