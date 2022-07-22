import styled from "@emotion/styled";

type SizeWrapperProps = {
  width: string;
  children?: React.ReactNode;
  height?: string;
};

const SizeWrapper: React.FC<SizeWrapperProps> = ({
  width,
  height,
  children,
}) => (
  <StyledSizeWrapper width={width} height={height}>
    {children}
  </StyledSizeWrapper>
);

const StyledSizeWrapper = styled.div`
  height: ${(p) => (p.height ? p.height : p.size)}px;
  width: ${(p) => (p.width ? p.width : p.size)}px;
`;

export default SizeWrapper;
