import React, { ElementType, HTMLAttributes, ReactNode } from 'react';
import { TypographyTokens, ColorTokens } from '../../theme/types';
import styles from './Text.module.css';

// 提取你 types.ts 中的键值，确保获得严格的 TS 提示
export type TextVariant = keyof TypographyTokens['styles'];
export type TextColor = keyof ColorTokens['text'];

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** 排版层级：对应 DESIGN.md 里的 displayHero, body, caption 等 */
  variant?: TextVariant;
  /** 语义化标签：默认是 span，可改为 h1, p, label 等 */
  as?: ElementType;
  /** 文本颜色：严格映射到 types.ts 的 text 颜色组 */
  color?: TextColor;
  /** 是否单行截断并显示省略号 */
  truncate?: boolean;
  children: ReactNode;
}

export const Text = ({
  variant = 'body',
  as: Component = 'span',
  color = 'primary',
  truncate = false,
  children,
  className = '',
  style,
  ...props
}: TextProps) => {
  // 核心魔法：动态拼装 CSS 变量映射
  // 这样只要 types.ts 里新增了变体，组件零代码修改直接生效！
  const dynamicStyles = {
    '--local-font-family': `var(--ad-typography-styles-${variant}-fontFamily)`,
    '--local-font-size': `var(--ad-typography-styles-${variant}-fontSize)`,
    '--local-font-weight': `var(--ad-typography-styles-${variant}-fontWeight)`,
    '--local-line-height': `var(--ad-typography-styles-${variant}-lineHeight)`,
    '--local-letter-spacing': `var(--ad-typography-styles-${variant}-letterSpacing)`,
    '--local-font-feature': `var(--ad-typography-styles-${variant}-fontFeatureSettings, normal)`,
    '--local-text-transform': `var(--ad-typography-styles-${variant}-textTransform, none)`,
  } as React.CSSProperties;

  const classes = [
    styles.text,
    styles[`color-${color}`],
    truncate ? styles.truncate : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component 
      className={classes} 
      style={{ ...dynamicStyles, ...style }} 
      {...props}
    >
      {children}
    </Component>
  );
};