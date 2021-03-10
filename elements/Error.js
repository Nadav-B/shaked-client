import styled from "styled-components";

const Error = ({ errorDescription }) => {
  return (
    <Wrapper>
      <h2>שגיאה בטעינת העמוד</h2>
      {errorDescription}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  margin: auto;
  text-align: center;
`;

export default Error;
