import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button 的三种风格 */
  variant?: 'primary' | 'solid' | 'frosted' | 'ghost';
  /** 尺寸控制 */
  size?: 'small' | 'medium' | 'large';
  // 增加形状控制
  shape?: 'standard' | 'pill';
  /** 是否加载中 */
  loading?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  children: ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'medium',
  shape = 'standard',
  loading = false,
  disabled = false,
  children, 
  className = '', 
  ...props 
}: ButtonProps) => {

  const classes = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`shape-${shape}`],
    loading ? styles['is-loading'] : '',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button 
      className={classes} 
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className={styles.loader}></span>}
      <span className={styles.content}>{children}</span>
    </button>
  );
};