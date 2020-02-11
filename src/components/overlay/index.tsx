import { FC } from 'react';
import { OverlayProps } from './overlay';

import React from 'react';
import { COLORS } from 'styles/colors';
import { StyledOverlay } from './styles';

export const Overlay: FC<OverlayProps> = ({
  color = COLORS.black,
  width = `${100 / 12}%`,
  interval = `${100 / 12}%`,
  direction = 'vertical',
  opacity = 0.2,
}) => (
  <StyledOverlay
    color={color}
    width={width}
    interval={interval}
    direction={direction}
    opacity={opacity}
  />
);
