import React, { ElementType, HTMLAttributes, ReactNode } from 'react';
import { SpacingTokens } from '../../theme/types';
import styles from './Grid.module.css';

export type SpacingScale = keyof SpacingTokens['scale'];
export type SpacingSemantic = keyof SpacingTokens['semantic'];

// 【核心改造】：保留 Token 智能提示，同时提供 CSS 原生值的“逃生舱”
// TypeScript 魔法：(string & {}) 会阻止 TS 把它粗暴地合并为 string，从而保留前面两项的代码提示
export type GapValue = SpacingScale | SpacingSemantic | (string & {}) | number;

export interface GridProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  columns?: 1 | 2 | 3 | 4 | 'asymmetric';
  rows?: number;
  gap?: GapValue;
  rowGap?: GapValue;
  columnGap?: GapValue;
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
  alignContent?: 'start' | 'center' | 'end' | 'stretch' | 'space-between' | 'space-around';
  justifyContent?: 'start' | 'center' | 'end' | 'stretch' | 'space-between' | 'space-around';
  children: ReactNode;
}

// 【核心改造】：智能解析器
const resolveGap = (val?: GapValue) => {
  if (val === undefined) return undefined;
  
  // 1. 如果是单纯的数字，并且在我们定义的 scale 刻度内 (如 8, 15, 30)
  if (typeof val === 'number' || (typeof val === 'string' && !isNaN(Number(val)))) {
    // 假设它是一个合法的 token key
    return `var(--ad-spacing-scale-${val}, ${val}px)`; 
    // 注意上面的 fallbacks：如果在 token 里没找到，就当做普通的 px 处理！这就是逃生舱。
  }
  
  // 2. 如果是我们定义的语义化 key (如 'componentGap')
  if (typeof val === 'string' && !val.includes('px') && !val.includes('rem') && !val.includes('%')) {
    return `var(--ad-spacing-semantic-${val})`;
  }

  // 3. 最终逃生舱：用户直接传了 '2rem', 'calc(100% - 20px)' 等原生 CSS 值
  return val;
};

export const Grid = ({
  as: Component = 'div',
  columns,
  rows,
  gap,
  rowGap,
  columnGap,
  autoFlow = 'row',
  alignItems = 'stretch',
  justifyItems = 'stretch',
  alignContent,
  justifyContent,
  children,
  className = '',
  style,
  ...props
}: GridProps) => {
  const dynamicStyles = {
    '--local-grid-gap': resolveGap(gap),
    '--local-grid-row-gap': resolveGap(rowGap),
    '--local-grid-column-gap': resolveGap(columnGap),
    '--local-grid-rows': rows ? `repeat(${rows}, 1fr)` : undefined,
    '--local-auto-flow': autoFlow,
    '--local-align-items': alignItems,
    '--local-justify-items': justifyItems,
    '--local-align-content': alignContent,
    '--local-justify-content': justifyContent,
  } as React.CSSProperties;

  Object.keys(dynamicStyles).forEach(
    key => dynamicStyles[key as keyof React.CSSProperties] === undefined && delete dynamicStyles[key as keyof React.CSSProperties]
  );

  const classes = [
    styles.grid,
    columns ? styles[`cols-${columns}`] : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} style={{ ...dynamicStyles, ...style }} {...props}>
      {children}
    </Component>
  );
};