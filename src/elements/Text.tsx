import * as React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

export type TextSizeProps = 'large' | 'medium' | 'small';

import shouldForwardProp from '@styled-system/should-forward-prop';

import { color, typography, ColorProps, TypographyProps } from 'styled-system';

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      children,
      as = 'p',
      size = 'medium',
      truncate = false,
      capsize = true,
      weight = 'regular',
      color,
      ...props
    },
    ref
  ) => {
    const fontSize = props.fontSize || size;
    const fontWeight =
      weight === 'regular'
        ? 400
        : weight === 'medium'
        ? 500
        : weight === 'strong'
        ? 700
        : 400;

    return (
      <StyledText
        color={color as any}
        as={as}
        size={size}
        truncate={truncate}
        fontWeight={fontWeight}
      
        {...props}
        ref={ref}
      >
        {truncate ? <TruncateText>{children}</TruncateText> : children}
      </StyledText>
    );
  }
);

export type TextProps = Omit<TypographyProps, 'fontSize'> &
  ColorProps & {
    size?: TextSizeProps;
    truncate?: boolean;
    capsize?: boolean;
    as?: As;
    fontSize?: string | number;
    children?: React.ReactNode;
  
    weight?: 'regular' | 'medium' | 'strong';
  };

type As<P = any> = React.ElementType<P>;

const StyledText = styled('p', { shouldForwardProp })<StyledTextProps>(
  (p: StyledTextPropsWithTheme) => ({
    ...p.textStyles,
    margin: 0,
    fontFamily: p.theme.fontFamily,
    fontWeight: "bold",
    letterSpacing: '0.000001px',
    color: p.theme.colors.text,
    boxSizing: 'border-box',
  }),
  color,
  typography
);

type StyledTextProps = TextProps & {
  textStyles: any;
  color: any;
};
type StyledTextPropsWithTheme = StyledTextProps & {
  theme: Theme;
};

const TruncateText = styled.span`
  display: block;
    transition: background-color 1s;

  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

Text.displayName = 'Text';
export default Text;