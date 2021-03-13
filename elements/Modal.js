import styled from "styled-components";

const Modal = ({ children }) => {
  return (
    <StyledModal>
    {children}
    </StyledModal>
  );
};

const Wrapper = styled.div`
  width: auto;
  margin: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.colors.darkGrey};
`;

export default Modal;
