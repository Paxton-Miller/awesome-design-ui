import React, { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.css';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** * 语义化标签，配合无障碍访问 (A11y)
   * 常用：'main', 'section', 'article', 'header', 'footer'
   * @default 'div'
   */
  as?: ElementType;
  
  /** * 是否开启区块级的垂直呼吸留白 
   * 映射到 DESIGN.md 的 120px 大间距
   * @default false
   */
  sectionPadding?: boolean;
  
  /** * 是否流式铺满（取消 1200px 的最大宽度限制） 
   * 适用于 Hero 背景区或者全屏 Banner
   * @default false
   */
  fluid?: boolean;
  
  children: ReactNode;
}

export const Container = ({
  as: Component = 'div',
  sectionPadding = false,
  fluid = false,
  children,
  className = '',
  ...props
}: ContainerProps) => {
  // 动态拼装类名
  const classes = [
    styles.container,
    fluid ? styles['is-fluid'] : '',
    sectionPadding ? styles['with-section-padding'] : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};