'use client';

import { Notification } from '@/src/entities/notification/types';
import { Card } from '../../../../components/Card/Card';
import { EmptyPlaceholder } from '../EmptyPlaceholder/EmptyPlaceholder';
import styles from './CardList.module.css';

interface CardListProps {
  data: Notification[];
  onAction: (action: string, target: string) => void;
}

export function CardList({ data, onAction }: CardListProps) {
  if (data.length === 0) {
    return <EmptyPlaceholder />;
  }

  console.log(data);

  return (
    <div className={styles.cardList}>
      {data.map((card, idx) => (
        <Card key={idx} {...card} onAction={onAction} />
      ))}
    </div>
  );
}
