import styled from "@emotion/styled";
import TypeFontSize from "./FontSize";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  position,
  border,
  space,
  layout,
  color,
  background,
  flex,
  flexbox,
  shadow,
  typography,
  PositionProps,
  LayoutProps,
  SpaceProps,
  ColorProps,
  BorderProps,
  ShadowProps,
  BackgroundProps,
  TypographyProps,
  FlexboxProps,
  GridProps,
} from "styled-system";

export type ButtonProps = PositionProps &
  LayoutProps &
  FlexboxProps &
  SpaceProps &
  TypeFontSize &
  ColorProps &
  BorderProps &
  ShadowProps &
  BackgroundProps &
  TypographyProps &
  GridProps &
  React.AllHTMLAttributes<HTMLElement> & {
    as?: As;
    children?: React.ReactNode;
  };
type As<P = any> = React.ElementType<P>;

const StyledButton = styled("button", { shouldForwardProp })<ButtonProps>`
  display: block;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 80%;
  max-width: ${(p) => p.maxWidth};

  font-size: ${(p) => p.fontSize || p.theme.fontSize.normal};
  font-family: ${(p) => p.theme.fontFamily};
  border-radius: ${(p) => p.theme.border}px;
  border: 1px solid ${(p) => p.theme.colors.lightGrey};
  background: #21646b;
  color: white;
  font-weight: bold;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 9px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    border-radius: 10px;
    background: green;
    font-weight: bold;
`}

  &:hover {
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    color: black;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(p) => p.theme.colors.darkGrey};
  }

  ::-moz-focus-inner {
    border: 0;
  }
`;

export default StyledButton;
