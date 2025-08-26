'use client';

import { memo, useMemo } from 'react';
import styles from './TimeAgo.module.css';
import { formatTimeAgo } from './lib/formatTimeAgo';

type TimeAgoProps = {
  created: string;
  className?: string;
};

export const TimeAgo = memo(({ created, className }: TimeAgoProps) => {
  const label = useMemo(() => formatTimeAgo(created), [created]);

  if (!label) return null;

  return (
    <span
      className={`${styles.timeAgo}${className ? ` ${className}` : ''}`}
      aria-label={`Создано: ${label} назад`}
    >
      {label}
    </span>
  );
});

TimeAgo.displayName = 'TimeAgo';
