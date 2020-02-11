import { ThemeRecord } from 'typings/themes';
import { DefaultTheme } from 'styled-components';

import { COLORS } from 'styles/colors';

const LIGHT_THEME: DefaultTheme = {
  headerColor: COLORS.black,
  copyColor: COLORS.black,
  backgroundColor: COLORS.white,
  borderColor: COLORS.black,
};

const DARK_THEME: DefaultTheme = {
  headerColor: COLORS.white,
  copyColor: COLORS.white,
  backgroundColor: COLORS.black,
  borderColor: COLORS.white,
};

export const THEMES: ThemeRecord = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
};

export const DEFAULT_THEME = LIGHT_THEME;
