import React from "react"
import styled from "@emotion/styled"

/**
 * valid variants are: 'large', 'small', 'regular', 'medium', 'semiBold', 'ellipsis', 'nowrap'
 */

/** TODO: refactor */
const Text = ({
  as = "p",
  variant = "",
  children,
  fontSize,
  margin,
  className,
}) => {
  return (
    <StyledText
      className={className}
      as={as}
      variant={variant}
      fontSize={fontSize}
      margin={margin}
    >
      {children}
    </StyledText>
  )
}

const StyledText = styled.p`
  margin: ${p => p.margin || 0};
  text-overflow: ${p => (p.variant.includes("ellipsis") ? "ellipsis" : "")};
  white-space: ${p =>
    p.variant.includes("nowrap") || p.variant.includes("ellipsis")
      ? "nowrap"
      : ""};
  overflow: ${p => (p.variant.includes("ellipsis") ? "hidden" : "")};
  font-size: ${p => p.fontSize || p.theme.fontSize.normal};
  font-weight: ${p =>
    p.variant.includes("semiBold")
      ? p.theme.fontWeight.semiBold
      : p.variant.includes("regular")
      ? p.theme.fontWeight.regular
      : p.theme.fontWeight.medium};
  font-family: ${p => p.theme.fontFamily};
  width: ${p => (p.variant.includes("max-content") ? "max-content" : "")};
  color: ${p =>
    p.variant.includes("error") ? p.theme.colors.torchRed : "currentColor"};
`

export default Text
