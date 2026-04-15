import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import React from 'react';

// 提前提取 options 供 Storybook 面板使用，体现“API集合参考”
const gapOptions = [
  'none', 
  // 比例尺参考
  1, 2, 4, 8, 12, 15, 20, 30, 
  // 语义化参考
  'componentGap', 'cardPadding', 'section', 
  // 逃生舱参考
  '2rem', '5vw'
];

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'select', options: [1, 2, 3, 4, 'asymmetric'] },
    rows: { control: 'number' },
    // 【核心改造】：提供完善的 API 集合参考下拉框
    gap: { control: 'select', options: gapOptions },
    rowGap: { control: 'select', options: gapOptions },
    columnGap: { control: 'select', options: gapOptions },
    alignItems: { control: 'select', options: ['start', 'center', 'end', 'stretch'] },
    justifyItems: { control: 'select', options: ['start', 'center', 'end', 'stretch'] },
    alignContent: { control: 'select', options: ['start', 'center', 'end', 'stretch', 'space-between', 'space-around'] },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const MockBox = ({ text, height = 'auto' }: { text: string; height?: string }) => (
  <div style={{ 
    background: 'var(--ad-colors-background-surfaceGlass)', 
    border: '1px solid var(--ad-colors-border-subtle)',
    padding: '20px', color: 'var(--ad-colors-text-primary)', 
    borderRadius: 'var(--ad-radii-card)', textAlign: 'center', height 
  }}>
    {text}
  </div>
);

// 测试：独立的 rowGap 和 columnGap
export const IndependentGaps: Story = {
  args: {
    columns: 2,
    rowGap: 'cardPadding', // 垂直间距用卡片级别
    columnGap: 8,          // 水平间距用极小的 8px Token
    children: (
      <>
        <MockBox text="Item 1" />
        <MockBox text="Item 2" />
        <MockBox text="Item 3" />
        <MockBox text="Item 4" />
      </>
    ),
  },
};

// 测试：CSS 逃生舱
export const EscapeHatch: Story = {
  args: {
    columns: 3,
    gap: '2.5rem', // 使用非 Token 的原生 CSS 字符串
    children: (
      <>
        <MockBox text="Custom Gap" />
        <MockBox text="Custom Gap" />
        <MockBox text="Custom Gap" />
      </>
    ),
  },
};