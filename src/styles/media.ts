import { MediaRecord } from 'typings/media';

import { css } from 'styled-components';

export const BREAKPOINTS = {
  desktopWide: 1440,
  desktop: 992,
  tablet: 768,
  phone: 480,
};

export const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (args: TemplateStringsArray) => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(args)}
    }
  `;
  return acc;
}, {} as MediaRecord);
