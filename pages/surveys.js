import React from "react";
import styled from "@emotion/styled";

const Surveys = () => {
  return (
    <FrameWrapper>
      <iframe src="https://shakedm.co.il/surveys"></iframe>
    </FrameWrapper>
  );
};

const FrameWrapper = styled.div`
  overflow: hidden;
  padding-top: 56.25%; /* 16:9*/
  position: relative;

  iframe {
    border: 0;
    height: 925px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export default Surveys;
