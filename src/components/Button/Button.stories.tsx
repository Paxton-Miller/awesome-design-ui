import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atomic/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'solid', 'frosted', 'ghost'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Get Started',
  },
};

export const Frosted: Story = {
  args: {
    variant: 'frosted',
    children: 'Watch Demo',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Learn More',
  },
};