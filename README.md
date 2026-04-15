初始化与依赖配置
```bash
npm install -g pnpm
pnpm init
```

```bash
# 安装构建工具和 TypeScript
pnpm add vite vite-plugin-dts typescript -D

# 安装 React 相关（作为开发依赖）
pnpm add react react-dom @types/react @types/react-dom -D
```

打开 package.json，手动添加 peerDependencies，告诉使用者：“你必须自己安装 React 才能用我的库”。
```json
{
  "name": "my-ui-lib",
  "version": "1.0.0",
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

初始化 TypeScript 配置：

```Bash
npx tsc --init
```

修改生成的 tsconfig.json，确保它是为 React 和打包准备的：

```JSON
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "strict": true,
    "declaration": true,
    "outDir": "./dist",
    "skipLibCheck": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}
```

```bash
pnpm dlx storybook@latest init
```
