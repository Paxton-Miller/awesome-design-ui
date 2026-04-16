import React, { useEffect } from 'react';

export const CssBaseline = () => {
  useEffect(() => {
    // 动态向页面注入全局样式
    const style = document.createElement('style');
    style.id = 'awesome-design-ui-baseline';
    style.innerHTML = `
      html, body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-color: var(--ad-colors-background-base, #000);
        color: var(--ad-colors-text-primary, #fff);
        font-family: var(--ad-typography-styles-body-fontFamily, sans-serif);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color-scheme: dark light; /* 根据主题可切换，这里做个兜底 */
      }
      
      /* 修复 Next.js / Vite 挂载点的默认高度问题 */
      #root, #__next {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
    `;
    
    if (!document.getElementById('awesome-design-ui-baseline')) {
      document.head.appendChild(style);
    }

    return () => {
      // 卸载时清理（可选，通常 baseline 不需要卸载）
      const el = document.getElementById('awesome-design-ui-baseline');
      if (el) document.head.removeChild(el);
    };
  }, []);

  return null; // 它只负责注入样式，不渲染任何真实 DOM
};