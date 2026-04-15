import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import React from 'react';

// 提前准备常用选项集合参考
const paddingOptions = ['none', 8, 12, 16, 20, 24, 30, 'componentGap', 'cardPadding', '2rem'];
const radiusOptions = ['micro', 'small', 'standard', 'card', 'container', 'pill', '0px', '2rem'];

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['flat', 'surface', 'contained', 'elevated'],
      description: '映射 MD 规范的 Level 0 ~ Level 3'
    },
    hoverable: { control: 'boolean' },
    padding: { control: 'select', options: paddingOptions },
    radius: { control: 'select', options: radiusOptions },
    as: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// 占位内容组件
const MockContent = () => (
  <div style={{ color: 'var(--ad-colors-text-primary)' }}>
    <h3 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>Designing in the Dark</h3>
    <p style={{ margin: 0, color: 'var(--ad-colors-text-secondary)', fontSize: '15px', lineHeight: 1.5 }}>
      Framer uses blue-tinted ring shadows at very low opacity for containment — a signature move that subtly brands every bordered element.
    </p>
  </div>
);

// 核心测试：MD 规范的 4 种层级
export const Surface: Story = {
  args: { variant: 'surface', hoverable: false, children: <MockContent /> },
};

export const Elevated: Story = {
  args: { variant: 'elevated', hoverable: false, children: <MockContent /> },
};

export const Contained: Story = {
  args: { variant: 'contained', hoverable: false, children: <MockContent /> },
};

// 测试：开启 Hoverable 后的交互变化
export const HoverableSurface: Story = {
  args: { variant: 'surface', hoverable: true, children: <MockContent /> },
};

// 测试：利用逃生舱打破默认规范
export const CustomPaddingAndRadius: Story = {
  args: {
    variant: 'surface',
    padding: '3rem', // 逃生舱 CSS 值
    radius: 'container', // 20px 特大圆角 Token
    children: <MockContent />
  }
};