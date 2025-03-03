import React from 'react';
import type { Preview } from '@storybook/react'

import { ConfirmRoot } from '../src/Confirm'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: 
    (Story) => (
      <>
        <Story />
        <ConfirmRoot />
      </>
    ),
};

export default preview;