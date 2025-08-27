'use client';

import { Notification } from '@/src/entities/notification/types';
import { Card } from '../../components/Card/Card';
import { EmptyPlaceholder } from './components/EmptyPlaceholder/EmptyPlaceholder';
import styles from './CardList.module.css';
import { Skeleton } from '@/src/components/Skeleton';

const SKELETON_COUNT = 5;

interface CardListProps {
  isLoading: boolean;
  data: Notification[];
  onAction: (action: string, target: string) => void;
}

export function CardList({ isLoading, data, onAction }: CardListProps) {
  if (isLoading) {
    return (
      <div className={styles.cardList}>
        {Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
          <Skeleton key={idx} height={80} borderRadius={8} />
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return <EmptyPlaceholder />;
  }

  return (
    <div className={styles.cardList}>
      {data.map((card, idx) => (
        <Card key={idx} {...card} onAction={onAction} />
      ))}
    </div>
  );
}
