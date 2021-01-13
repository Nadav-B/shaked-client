import React from "react";
import styled from "styled-components";

/**
 * valid variants are: 'large', 'small', 'regular', 'medium', 'semiBold', 'ellipsis', 'nowrap'
 */

/** TODO: refactor */
const Title = ({
  className,
  as = "p",
  variant = "",
  children,
  fontSize,
  margin,
}) => {
  return (
    <StyledText as={as} variant={variant} fontSize={fontSize} margin={margin}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.p`
  margin: ${(p) => p.margin || 0};
  text-overflow: ${(p) => (p.variant.includes("ellipsis") ? "ellipsis" : "")};
  white-space: ${(p) =>
    p.variant.includes("nowrap") || p.variant.includes("ellipsis")
      ? "nowrap"
      : ""};
  text-align: center;
  padding-top: 40px;
  margin-bottom: 30px;

  overflow: ${(p) => (p.variant.includes("ellipsis") ? "hidden" : "")};
  font-size: ${(p) => p.fontSize || p.theme.fontSize.xl};
  font-family: ${(p) => p.theme.fontFamily};
  width: ${(p) => (p.variant.includes("max-content") ? "max-content" : "")};
  color: ${(p) =>
    p.variant.includes("error")
      ? p.theme.colors.torchRed
      : p.variant.includes("sucess")
      ? p.theme.colors.caribbeanGreen
      : p.variant.includes("title")
      ? p.theme.colors.navyBlue
      : p.theme.colors.black};
  font-weight: ${(p) => (p.variant.includes("title") ? "bold" : "normal")};
`;

export default Title;
