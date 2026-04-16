# 📦 Awesome Design UI

Awesome Design UI 是一个现代化、高度可定制的 React 基础组件库。

它的核心特性在于 **动态主题驱动 (Theme-Driven)**。底层的组件样式完全解耦并绑定至强大的 `ThemeConfig` 体系，这意味着你可以零成本接入预设的绝美主题（如基于 Framer 设计哲学的深度定制主题），并在运行时无缝切换组件的视觉表现。

**📚 官方文档与组件预览:** [Awesome Design UI Storybook](https://awesome-design-ui.vercel.app/)

---

## ✨ 核心特性

- 🎨 **动态主题引擎**：内置强大的 Token 注入系统，支持在应用运行时无缝切换全局主题（如深浅色模式或自定义品牌色）。
    
- 🧩 **开箱即用的基础组件**：提供 Button, Card, Input 等基础物料，均已深度绑定主题 Token。
    
- ⚡️ **极致性能**：底层通过注入全局 CSS Variables (`--ad-*`) 实现样式驱动，避免了传统的 CSS-in-JS 运行时性能损耗。
    
- 🛠 **极佳的 DX (开发者体验)**：完善的 TypeScript 类型推导，确保配置主题和使用组件时的丝滑体验。
    

---

## 🚀 快速上手

### 1. 安装依赖

你可以使用任何你喜欢的包管理器进行安装：


```Bash
npm install awesome-design-ui
# 或者
yarn add awesome-design-ui
# 或者
pnpm add awesome-design-ui
```

### 2. 全局注入主题 (Provider)

在你的 React 应用的根节点（如 `App.tsx` 或 `main.tsx`），引入 `ThemeProvider` 和预设主题（例如 `framerTheme`），这将自动向你的 `:root` 节点注入当前主题的 CSS 变量。


```TypeScript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { 
  ThemeProvider, 
  framerTheme, 
  Container, 
  Grid, 
  Card, 
  Text, 
  Button, 
  airtableTheme,
  CssBaseline,
  appleTheme
} from "awesome-design-ui";
import "awesome-design-ui/style.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 包裹在最外层，向全局注入该主题的 Token */}
    <ThemeProvider theme={framerTheme}>
      {/* 建议携带 CssBaseline，覆盖默认全局主题样式 */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
```

### 3. 使用组件

现在，你可以在任何地方愉快地使用基础组件了。组件的颜色、圆角、排版和阴影都将自动跟随当前注入的 `Theme`！


```TypeScript
import { Card, Button, Text } from 'awesome-design-ui';

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      {/* Card 组件会自动应用当前主题的 surface 背景色和圆角 */}
      <Card>
        <Text variant="secondary">
          无需编写一行基础样式代码，利用 Awesome Design UI 快速构建具备极致现代感的用户界面。
        </Text>
        
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
          {/* Button 会自动获取主题配置的 actionPrimary 颜色和交互动画 */}
          <Button variant="solid">立即体验</Button>
          <Button variant="ghost">阅读文档</Button>
        </div>
      </Card>
    </div>
  );
}

export default App;
```

---

## 🌗 动态切换主题

Awesome Design UI 的组件完全响应于外层 Provider。如果你需要实现主题切换功能，只需改变传入 `ThemeProvider` 的 `theme` 属性即可：


```TypeScript
import { useState } from 'react';
import { ThemeProvider, Button } from 'awesome-design-ui';
import { framerTheme, appleTheme } from 'awesome-design-ui/themes';

function ThemeSwitcherApp() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? framerTheme : appleTheme}>
      <div className="app-container">
        <Button onClick={() => setIsDark(!isDark)}>
          切换至 {isDark ? '浅色' : '深色'} 模式
        </Button>
        
        {/* 下方的所有组件都会随着主题状态瞬间切换样式 */}
        <MyContent />
      </div>
    </ThemeProvider>
  );
}
```

🎨 目前已支持的主题系列：(特别鸣谢👏 [Awesome DESIGN.md](https://github.com/VoltAgent/awesome-design-md))
- [Framer](https://getdesign.md/framer/design-md)
- [Apple](https://getdesign.md/apple/design-md)
- [Airtable](https://getdesign.md/airtable/design-md)

---

## 🎨 高级用法：直接使用 Token 变量

如果你需要在业务代码中编写自定义 CSS，且希望它们也能跟随主题变化，请直接使用我们在 Storybook 中记录的 CSS 变量：


```CSS
/* 自定义业务组件 */
.my-custom-banner {
  /* 自动适配当前主题的底色和文本色 */
  background-color: var(--ad-colors-background-surfaceGlass);
  color: var(--ad-colors-text-primary);
  border-radius: var(--ad-radii-container);
  padding: var(--ad-spacing-semantic-cardPadding);
}
```

👉 **查看完整的 Token 变量名对照表：** [Storybook - 设计变量全览](https://awesome-design-ui.vercel.app/?path=/story/%E7%B3%BB%E7%BB%9F-%E8%AE%BE%E8%AE%A1%E5%8F%98%E9%87%8F-tokens--all-tokens&globals=backgrounds.value:dark)

---

## 🤝 参与共建

欢迎提交 Issue 或 Pull Request 来帮助我们完善这个组件库！

1. Fork 本仓库
    
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
    
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
    
4. 推送至分支 (`git push origin feature/AmazingFeature`)
    
5. 开启一个 Pull Request
    

---

_Built with ❤️ by Lingkai Shi_