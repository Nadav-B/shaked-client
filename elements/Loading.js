import { RotateCircleLoading } from "react-loadingg";
import styled from "styled-components";

const Loading = () => {
  return (
    <>
      <Wrapper>
        <RotateCircleLoading color="#0a589d" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
`;

export default Loading;
