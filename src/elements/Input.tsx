import React from "react";
import styled from "@emotion/styled";
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

const Input = styled("input", { shouldForwardProp })<InputProps>(
  () => ({
    display: "flex",
    minWidth: 0,
    margin: "8px 0",
    boxSizing: "border-box",
    fontSize: "16px",
    border: "1px solid #ccc",
    padding: "12px 20px",
    borderRadius: "4px",
    bacgkround: "silver",
  }),
  position,
  layout,
  flex,
  flexbox,
  space,
  color,
  background,
  border,
  shadow,
  typography
);

export type InputProps = PositionProps &
  LayoutProps &
  FlexboxProps &
  SpaceProps &
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

export default Input;
