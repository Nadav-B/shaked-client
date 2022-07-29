import styled from "@emotion/styled";

const Bubbel = () => {
  return <StyledButton>למה אתם מחכים?</StyledButton>;
};

const StyledButton = styled.button`
  position: fixed;
  z-index: 105;
  bottom: 10px;
  left: 10px;
  background: red;
`;

export default Bubbel;
