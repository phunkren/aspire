import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withContexts } from '@storybook/addon-contexts/react';
import { GlobalStyles } from 'styles/global';
import { StorybookStyles } from './styles';
import { contexts } from './contexts';
import { viewports } from './viewports';

// https://github.com/storybookjs/storybook/issues/5551
configureActions({
  depth: 5,
  limit: 20,
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withContexts(contexts));

addParameters({
  viewport: {
    defaultViewport: 'phone',
    viewports,
  },
});

addDecorator(story => (
  <>
    <GlobalStyles />
    <StorybookStyles />
    {story()}
  </>
));
