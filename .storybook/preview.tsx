// .storybook/preview.tsx
import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../src/provider/ThemeProvider';
import { framerTheme } from '../src/theme/framer';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // 将默认背景改为 Framer 的 Void Black
    backgrounds: {
      default: 'framer-dark',
      values: [
        { name: 'framer-dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  // 注入我们刚刚写好的 ThemeProvider
  decorators: [
    (Story) => (
      <ThemeProvider theme={framerTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;