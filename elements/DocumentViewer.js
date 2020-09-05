import styled from "styled-components";

const DocumentViewer = ({ src }) => {
  const srci = `/documents/balance/${src}.pdf#toolbar=0`;
  const documetns = ["mizrahi-tefahot"];

  const ifExsits = () => {
    return documetns.includes(src);
  };

  return ifExsits() && <StyledFrame src={srci} width="100%" height="100%" />;
};

const StyledFrame = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
`;

export default DocumentViewer;
