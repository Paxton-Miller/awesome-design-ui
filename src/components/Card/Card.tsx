import React, { ElementType, HTMLAttributes, ReactNode } from 'react';
import { RadiusTokens, SpacingTokens } from '../../theme/types';
import styles from './Card.module.css';

// 提取合法的 Token 键名
type SpacingScale = keyof SpacingTokens['scale'];
type SpacingSemantic = keyof SpacingTokens['semantic'];
type GapValue = SpacingScale | SpacingSemantic | (string & {}) | number;
type RadiusValue = keyof RadiusTokens | (string & {}) | number;

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** 语义化标签，如 article, section, div */
  as?: ElementType;
  /**
   * 变体类型（完美映射 DESIGN.md 的 4 个 Elevation 层级）
   * - flat: Level 0 (无阴影，纯黑背景)
   * - surface: Level 1 (Framer 招牌蓝环阴影，默认)
   * - contained: Level 2 (近黑收缩环，用于极弱的容器隔离)
   * - elevated: Level 3 (顶边高光 + 极深环境光阴影)
   */
  variant?: 'flat' | 'surface' | 'contained' | 'elevated';
  /** 是否开启悬浮交互态 (悬浮时光环增强或产生位移) */
  hoverable?: boolean;
  /** 自定义内边距：默认使用 semantic.cardPadding (24px) */
  padding?: GapValue;
  /** 自定义圆角：默认使用 radii.card (12px) */
  radius?: RadiusValue;
  children: ReactNode;
}

// 间距解析器 (复用之前 Grid 的逃生舱逻辑)
const resolvePadding = (val?: GapValue) => {
  if (val === undefined) return undefined;
  if (typeof val === 'number' || (typeof val === 'string' && !isNaN(Number(val)))) {
    return `var(--ad-spacing-scale-${val}, ${val}px)`;
  }
  if (typeof val === 'string' && !val.includes('px') && !val.includes('rem') && !val.includes('%')) {
    return `var(--ad-spacing-semantic-${val})`;
  }
  return val;
};

// 圆角解析器
const resolveRadius = (val?: RadiusValue) => {
  if (val === undefined) return undefined;
  if (typeof val === 'string' && !val.includes('px') && !val.includes('rem') && !val.includes('%')) {
    return `var(--ad-radii-${val})`;
  }
  return typeof val === 'number' ? `${val}px` : val;
};

export const Card = ({
  as: Component = 'div',
  variant = 'surface',
  hoverable = false,
  padding,
  radius,
  children,
  className = '',
  style,
  ...props
}: CardProps) => {
  // 动态注入局部 CSS 变量
  const dynamicStyles = {
    '--local-card-padding': resolvePadding(padding),
    '--local-card-radius': resolveRadius(radius),
  } as React.CSSProperties;

  // 清理 undefined 属性
  Object.keys(dynamicStyles).forEach(
    key => dynamicStyles[key as keyof React.CSSProperties] === undefined && delete dynamicStyles[key as keyof React.CSSProperties]
  );

  const classes = [
    styles.card,
    styles[`variant-${variant}`],
    hoverable ? styles['is-hoverable'] : '',
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