import React from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
  lines?: number;
  lineHeight?: string | number;
  lineSpacing?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  className = '',
  lines = 1,
  lineHeight = '20px',
  lineSpacing = '8px',
}) => {
  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius:
      typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
  };

  const lineStyle = {
    height: typeof lineHeight === 'number' ? `${lineHeight}px` : lineHeight,
    marginBottom:
      typeof lineSpacing === 'number' ? `${lineSpacing}px` : lineSpacing,
  };

  if (lines === 1) {
    return (
      <div
        className={`${styles.skeleton} ${className}`}
        style={containerStyle}
        aria-label="Загрузка"
      />
    );
  }

  return (
    <div className={className}>
      {Array.from({ length: lines }, (_, index) => (
        <div
          key={index}
          className={styles.skeleton}
          style={{
            ...lineStyle,
            width: typeof width === 'number' ? `${width}px` : width,
            borderRadius:
              typeof borderRadius === 'number'
                ? `${borderRadius}px`
                : borderRadius,
            marginBottom: index === lines - 1 ? '0' : lineStyle.marginBottom,
          }}
          aria-label="Загрузка"
        />
      ))}
    </div>
  );
};
