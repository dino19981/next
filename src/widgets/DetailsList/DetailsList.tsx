'use client';

import { Container } from '@/src/components/Container';
import { CardList } from '../CardList/CardList';
import { Notification } from '@/src/entities/notification/types';

interface Props {
  notifications: Notification[];
}

export const DetailsList = ({ notifications }: Props) => {
  const handleAction = (action: string, target: string) => {
    alert(`Действие: ${action} - ${target}`);
  };

  return (
    <Container>
      <CardList
        isLoading={false}
        data={notifications}
        onAction={handleAction}
      />
    </Container>
  );
};
