import styled from "@emotion/styled";
import Flex from "./Flex";

const ContactViewer = () => {
  return (
    <Flex margin={20} alignItems="center" flexDirection="column">
      <StyledSucess>פרטייך נשלחו בהצלחה</StyledSucess>
    </Flex>
  );
};

const StyledSucess = styled.div`
  color: ${(props) => props.theme.colors.salem};
  font-size: ${(props) => props.theme.fontSize.large};
`;

export default ContactViewer;
