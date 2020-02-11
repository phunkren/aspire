import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { position } from 'polished';
import { Theme, ThemeContainer } from 'components/theme';
import { SPACING } from 'styles/spacing';

export const StorybookStyles = createGlobalStyle`
  body {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
`;

export const Backdrop = styled(ThemeContainer)`
  ${position('fixed', '0', '0', '0', '0')};
  z-index: -1;
`;

export const Story = styled(ThemeContainer)`
  padding: ${SPACING.huge}px;
  width: 100%;
`;

export const Stage = ({ children, theme }) => (
  <Theme theme={theme}>
    <>
      <Story>{children}</Story>
      <Backdrop />
    </>
  </Theme>
);
