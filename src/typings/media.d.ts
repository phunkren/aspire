import { ThemedCssFunction, DefaultTheme } from 'styled-components';

import { BREAKPOINTS } from 'styles/media';

export type BreakpointType = keyof typeof BREAKPOINTS;

export type MediaRecord = Record<
  BreakpointType,
  ThemedCssFunction<DefaultTheme>
>;
