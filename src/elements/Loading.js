import { RotateCircleLoading } from "react-loadingg";
import styled from '@emotion/styled';
import Wrapper from "./Wrapper";

const Loading = () => {
  return (
    <Wrapper>
      <RotateCircleLoading color="#0a589d" />
    </Wrapper>
  );
};

export default Loading;
