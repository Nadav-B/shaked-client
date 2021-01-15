import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <h2>שגיאה בטעינת העמוד</h2>
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
