import React from 'react';

// 显式声明为 React.FC，让打包出来的类型变得标准
export const CssBaseline: React.FC = () => {
  const css = `
    html, body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background-color: var(--ad-colors-background-base, #000);
      color: var(--ad-colors-text-primary, #fff);
      font-family: var(--ad-typography-styles-body-fontFamily, sans-serif);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color-scheme: dark light;
    }
    
    #root, #__next {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  `;

  // 直接返回 style 标签，完美支持 Next.js 的 SSR 服务端渲染，告别闪烁！
  return (
    <style 
      id="awesome-design-ui-baseline"
      dangerouslySetInnerHTML={{ __html: css }} 
    />
  );
};