import '@emotion/react'
import { ThemeTokens } from 'qurator-ui';

declare module '@emotion/react' {
  export interface Theme extends ThemeTokens {}
}