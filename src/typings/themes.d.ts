import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    headerColor: string;
    copyColor: string;
    backgroundColor: string;
    borderColor: string;
  }
}

export type ThemeType = 'light' | 'dark';

export type ThemeRecord = Record<ThemeType, DefaultTheme>;
