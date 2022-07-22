import styled from "@emotion/styled";
import TypeFontSize from "./FontSize";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  position,
  border,
  layout,
  color,
  space,
  background,
  flex,
  flexbox,
  shadow,
  typography,
  PositionProps,
  LayoutProps,
  SpaceProps,
  display,
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
  layout &
  GridProps &
  React.AllHTMLAttributes<HTMLElement> & {
    as?: As;
    children?: React.ReactNode;
  };
type As<P = any> = React.ElementType<P>;

const StyledButton = styled("button", { shouldForwardProp })<ButtonProps>(
  {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    width: "100%",
    color: "white",
    fontWeight: "bold",
    margin: "auto",
    marginBottom: "20px",
    marginTop: "9px",
  },
  (props) => ({
    background: `${
      props.active ? "blue" : props.disabled ? "grey" : "#21646b"
    }`,
    cursor: `${props.disabled ? " not-allowed" : "pointer"}`,
    fontSize: `${props.fontSize || props.theme.fontSize.normal}`,
    fontFamily: `${props.fontFamily || props.theme.fontFamily}`,
    borderRadius: `${props.theme.borderRadius}`,
    border: `1px solid ${props.theme.colors.lightGrey}`,
  }),
  background,
  BorderProps,
  space,
  display,
  layout
);

/*



  &:hover {
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    color: black;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(p) => p.theme.colors.darkGrey};
  }

`;
*/
export default StyledButton;
