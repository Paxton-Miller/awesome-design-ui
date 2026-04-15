import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      // 这里列出几个代表性的变体进行测试
      options: ['displayHero', 'sectionHeading', 'bodyLarge', 'body', 'microUppercase'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'placeholder', 'inverse', 'muted'],
    },
    as: {
      control: 'text',
      description: 'HTML tag to render (e.g., h1, p, span)',
    }
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

// 测试: Framer 灵魂的 Display Hero (110px, -5.5px 字距)
export const DisplayHero: Story = {
  args: {
    variant: 'displayHero',
    as: 'h1',
    children: 'Build for the web.',
  },
};

// 测试: 带有 OpenType 特性的正文
export const BodyText: Story = {
  args: {
    variant: 'bodyLarge',
    as: 'p',
    color: 'secondary',
    children: 'The text component supports multiple variants and colors natively mapping to the Design Tokens.',
  },
};

// 测试: 业务中常用的属性组合
export const CustomProps: Story = {
  args: {
    variant: 'navUI',
    color: 'placeholder',
    truncate: true,
    style: { width: '150px', borderBottom: '1px solid #333' },
    children: 'This is a very long navigation text that should truncate',
  },
};