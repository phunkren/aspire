import React from 'react';
import styled, { css } from 'styled-components/macro';
import { map } from 'lodash';
import { H1, H2, H3, H4, Text } from 'styles/typography';
import { MEDIA } from 'styles/media';
import { COLORS } from 'styles/colors';
import { SPACING } from 'styles/spacing';

interface ColorProps {
  bgColor?: string;
}

interface SpacingProps {
  spacing?: number;
}

export default {
  title: 'Styles',
};

export const typography = () => (
  <div css="display: flex; flex-flow: column">
    <H1>Header 1</H1>

    <H2>Header 2</H2>

    <H3>Header 3</H3>

    <H4>Header 4</H4>

    <br />

    <Text as="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis
      commodo orci sed elementum. Praesent mollis elementum vulputate.
    </Text>

    <Text as="p">
      Curabitur ultrices viverra neque, at luctus velit vehicula eu. Nulla ut
      varius arcu. <Text css="color: red">Ut elementum aliquam orci</Text>, sit
      amet lobortis dui mollis et. Nam faucibus sagittis sodales.
    </Text>
  </div>
);

const Color = styled.div<ColorProps>(
  ({ theme, bgColor }) => css`
    position: relative;
    margin: ${SPACING.small}px;
    padding: ${SPACING.medium}px;
    border: 1px solid ${theme.borderColor};

    &::before {
      content: '';
      position: absolute;
      top: ${SPACING.medium}px;
      left: ${SPACING.medium}px;
      bottom: ${SPACING.medium}px;
      width: ${SPACING.giant}px;
      border-radius: 4px;
      background-color: ${bgColor};
      border: 1px solid ${theme.borderColor};
    }

    ${Text} {
      margin-left: calc(${SPACING.giant}px + ${SPACING.medium}px);
    }
  `,
);

const ColorGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Color} {
    flex: 1 1 40%;
  }
`;

const Spacing = styled.div<SpacingProps>(
  ({ spacing }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${SPACING.small}px;
    padding: ${spacing}px;
    outline: ${spacing}px solid ${COLORS.orange};
    outline-offset: -${spacing}px;
    text-align: center;
  `,
);

const SpacingGrid = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  height: 100%;

  ${Spacing} {
    flex: 1 0 25%;
  }

  ${MEDIA.tablet`
    flex-direction: row;
    flex-wrap: wrap;
  `}
`;

export const colors = () => {
  const colorCollection = map(COLORS, (hex, color) => ({ hex, color }));
  return (
    <ColorGrid>
      {colorCollection.map(({ hex, color }) => (
        <Color key={hex} bgColor={hex}>
          <Text as="p">{color}</Text>
          <Text
            as="p"
            css={`
              color: ${color};
            `}
          >
            {hex}
          </Text>
        </Color>
      ))}
    </ColorGrid>
  );
};

export const spacing = () => {
  const spacingCollection = map(SPACING, (value, key) => ({ key, value }));
  return (
    <SpacingGrid>
      {spacingCollection.map(({ key, value }) => (
        <Spacing key={key} spacing={value}>
          <Text as="p">
            {key} <Text>({value}px)</Text>
          </Text>
        </Spacing>
      ))}
    </SpacingGrid>
  );
};
