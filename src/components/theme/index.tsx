import { FC } from 'react';
import { ThemeType } from 'typings/themes';

import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { THEMES } from 'styles/themes';

interface Props {
  theme?: ThemeType;
  children: JSX.Element;
}

export const Theme: FC<Props> = ({ theme = 'light', children, ...props }) => (
  <ThemeProvider theme={THEMES[theme]} {...props}>
    {children}
  </ThemeProvider>
);

export const ThemeContainer = styled.div(
  ({ theme }) => css`
    background-color: ${theme.backgroundColor};
    color: ${theme.copyColor};
  `,
);
