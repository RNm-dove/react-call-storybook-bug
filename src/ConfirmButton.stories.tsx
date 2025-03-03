import type { Meta, StoryObj } from '@storybook/react';

import { ConfirmButton } from './ConfirmButton';

const meta = {
  title: 'confirm button',
  component: ConfirmButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ConfirmButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}

// Show Error
// Error: Multiple instances of <Root> found!
export const RedButton: Story = {
  args: {
    color: 'red'
  }
}

export const BlueButton: Story = {
  args: {
    color: 'blue'
  }
}