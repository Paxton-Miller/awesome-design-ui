import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button 的三种风格 */
  variant?: 'solid' | 'frosted' | 'ghost';
  /** 尺寸控制 */
  size?: 'small' | 'medium' | 'large';
  /** 是否加载中 */
  loading?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  children: ReactNode;
}

export const Button = ({ 
  variant = 'solid', 
  size = 'medium',
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