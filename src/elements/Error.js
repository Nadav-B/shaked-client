import styled from "styled-components";
import TextWrapper from "./TextWrapper";
import Wrapper from "./Wrapper";

const Error = ({ errorDescription }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <h2>שגיאה בטעינת העמוד</h2>
        {errorDescription}
      </TextWrapper>
    </Wrapper>
  );
};

export default Error;
