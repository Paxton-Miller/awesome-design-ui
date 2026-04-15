import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import React from 'react';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    sectionPadding: { control: 'boolean', description: '开启 120px 垂直呼吸留白' },
    fluid: { control: 'boolean', description: '取消 1200px 最大宽度限制' },
    as: { control: 'text', description: '渲染的 HTML 标签' },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

// 辅助块，方便在纯黑背景里看清楚边界
const MockContent = () => (
  <div style={{ 
    backgroundColor: 'var(--ad-colors-background-surface)', 
    border: '1px solid var(--ad-colors-border-subtle)',
    padding: '20px', 
    color: 'var(--ad-colors-text-secondary)', 
    textAlign: 'center', 
    borderRadius: 'var(--ad-radii-card)' 
  }}>
    Container Content Area (~1200px max width)
  </div>
);

export const Default: Story = {
  args: {
    children: <MockContent />,
  },
};

export const Fluid: Story = {
  args: {
    fluid: true,
    children: <MockContent />,
  },
};

export const SectionPadding: Story = {
  args: {
    sectionPadding: true,
    children: <MockContent />,
  },
};