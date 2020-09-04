import styled from "styled-components";
const DocumentViewer = ({ src }) => {
  const file_src = `https://shakedm.co.il/documents/balance/${src}.pdf`;

  console.log(src)
  return (
    <StyledFrame
      src={`https://docs.google.com/viewer?url=${file_src}&embedded=true`}
      width="100%"
      height="500px"
    />
  );
};

const StyledFrame = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 100;
`;

export default DocumentViewer;
