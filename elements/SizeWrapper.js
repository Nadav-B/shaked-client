import React from 'react';
import styled from 'styled-components'

const SizeWrapper = ({ size, width, height, children, className }) => (
  <StyledSizeWrapper
    size={size}
    width={width}
    height={height}
    className={className}
  >
    {children}
  </StyledSizeWrapper>
);

const StyledSizeWrapper = styled.div`
  height: ${p => (p.height ? p.height : p.size)}px;
  width: ${p => (p.width ? p.width : p.size)}px;
`;

export default SizeWrapper;
