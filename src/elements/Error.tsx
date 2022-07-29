import styled from "@emotion/styled";
import Flex from "./Flex";

interface ErrorProps {
  description?: String;
  optional?: String;
}

const Error: React.FC<ErrorProps> = ({ description, optional }) => {
  return (
    <Flex margin={20} alignItems="center" flexDirection="column">
      <StyledError>מצטערים </StyledError>
      <StyledDescription>{description}</StyledDescription>
      <StyledOptional>{optional}</StyledOptional>
    </Flex>
  );
};

const StyledError = styled.div`
  color: ${(props) => props.theme.colors.roseWood};
  font-size: ${(props) => props.theme.fontSize.xl};
`;

const StyledDescription = styled.div`
  color: ${(props) => props.theme.colors.roseWood};
`;

const StyledOptional = styled.div`
  font-size: ${(props) => props.theme.fontSize.small};
`;
export default Error;
