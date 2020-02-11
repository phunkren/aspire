import { OverlayProps } from './overlay';

import styled, { css } from 'styled-components';
import { rgba, position } from 'polished';

export const StyledOverlay = styled.div<OverlayProps>(
  ({ color, width, interval, direction, opacity }) => css`
    ${position('fixed', '0', '0', '0', '0')};
    background: repeating-linear-gradient(
      ${direction === 'vertical' ? '-90deg' : '0'},
      ${rgba(color, opacity)},
      ${rgba(color, opacity)} ${width},
      transparent ${width},
      transparent calc(${width} + ${interval})
    );
    pointer-events: none;
    z-index: 999;
  `,
);
