'use client';

import { Container } from '@/src/components/Container';
import React, { useCallback, useState } from 'react';
import { CardList } from '../CardList/CardList';
import { TabNavigation, TabVariant } from '@/src/features/TabNavigation';
import { useFilterNotifications } from './lib';
import styles from './CardListWithNavigation.module.css';
import { useGetNotifications } from '@/src/entities/notification/lib';

const DEFAULT_LIMIT = 5;

interface Props {
  initialNotifications?: Notification[];
  withNavigation?: boolean;
}

export const CardListWithNavigation = ({ withNavigation = true }: Props) => {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [activeTab, setActiveTab] = useState<TabVariant>(TabVariant.All);

  const { data, isLoading, refetch } = useGetNotifications({
    limit,
  });

  const notifications = useFilterNotifications({
    data: data?.results || [],
    activeTab,
  });

  const handleTabChange = (tab: TabVariant) => {
    setActiveTab(tab);
  };

  const handleAction = useCallback((action: string, target: string) => {
    alert(`Действие: ${action} - ${target}`);
  }, []);

  const onChangeLimit = () => {
    setLimit(limit + 5);
    queueMicrotask(refetch);
  };

  return (
    <Container className={styles.container}>
      {withNavigation && (
        <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      )}

      <CardList
        isLoading={isLoading}
        data={notifications}
        onAction={handleAction}
      />

      {data && data?.total >= limit && (
        <div className={styles.loadMoreButtonContainer}>
          <button className={styles.loadMoreButton} onClick={onChangeLimit}>
            Load more
          </button>
        </div>
      )}
    </Container>
  );
};
