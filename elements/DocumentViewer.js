// Create Document Component

import styled from "styled-components";
const MyDocument = ({ src }) => {
  return (
    <div>
      {src}
      <StyledFrame src={src} width="100%" height="500px" />
    </div>
  );
};

const StyledFrame = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 100;
`;

export default MyDocument;
