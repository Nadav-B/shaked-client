import styled from "styled-components";
import Text from "./Text";
import Button from "./Button";

const Modal = ({ object, modalFunction, setOpen }) => {
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <StyledModal>
      <Wrapper>
        <Text>בטוח שברצונך למחוק?</Text>
        <Button
          onClick={() => {
            modalFunction(object.id);
            closeModal();
          }}
        >
          כן
        </Button>
        <Button
          onClick={() => {
            closeModal();
          }}
        >
          לא
        </Button>
      </Wrapper>
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
  color: ${(p) => p.theme.colors.navyBlue};
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
