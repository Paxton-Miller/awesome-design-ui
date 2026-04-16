// .storybook/preview.tsx
import React from 'react';
import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline, framerTheme, appleTheme, airtableTheme } from '../src';

const themes = {
  framer: framerTheme,
  apple: appleTheme,
  airtable: airtableTheme,
};

const preview: Preview = {
  // 1. 定义工具栏下拉菜单
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'framer',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush', // 调色盘图标
        items: [
          { value: 'framer', title: 'Framer (Dark)' },
          { value: 'apple', title: 'Apple (Light)' },
          { value: 'airtable', title: 'Airtable (Enterprise)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  // 2. 使用装饰器自动包裹所有 Story
  decorators: [
    (Story, context) => {
      const themeKey = context.globals.theme || 'framer';
      const selectedTheme = themes[themeKey];

      return (
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          {/* 给 Story 一个内边距，方便观察 */}
          <div style={{ padding: '2rem' }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;