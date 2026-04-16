import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    // 去掉 rollupTypes，让插件原汁原味地输出类型文件
    dts({ include: ['src'] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AwesomeDesignUI',
      fileName: (format) => `awesome-design-ui.${format}.js`,
    },
    rollupOptions: {
      // 把 jsx-runtime 也加进来，避免打包冗余的 React 代码
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});