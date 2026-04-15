// src/provider/ThemeProvider.tsx
import React, { createContext, useContext, useMemo } from 'react';
import { ThemeConfig } from '../theme/types';

// 工具函数：深度遍历对象，生成 CSS 变量
function objectToCssVariables(obj: Record<string, any>, prefix = '--ad'): React.CSSProperties {
  const variables: Record<string, string> = {};

  const flatten = (currentObj: Record<string, any>, currentPrefix: string) => {
    for (const key in currentObj) {
      const value = currentObj[key];
      // 保持驼峰命名，直接用中划线连接
      const newKey = `${currentPrefix}-${key}`;
      
      if (typeof value === 'object' && value !== null) {
        flatten(value, newKey);
      } else {
        variables[newKey] = String(value);
      }
    }
  };

  flatten(obj, prefix);
  return variables as React.CSSProperties;
}

interface ThemeContextProps {
  theme: ThemeConfig;
}

// 初始化时不给默认值，强制要求外面包裹 Provider
const ThemeContext = createContext<ThemeContextProps | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme 必须在 ThemeProvider 内部使用');
  }
  return context;
};

export interface ThemeProviderProps {
  theme: ThemeConfig;
  children: React.ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  // 缓存计算结果，避免不必要的 re-render
  const cssVariables = useMemo(() => {
    const { name, ...tokens } = theme;
    return objectToCssVariables(tokens);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {/* 这里将所有的 --ad-xxx 变量挂载到 style 上。
        内部的 Button、Text 组件将直接消费这些变量！
      */}
      <div 
        className={`ad-theme-${theme.name}`} 
        style={cssVariables}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};