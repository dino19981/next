'use client';

import { Container } from '@/src/components/Container';
import React, { useCallback, useState } from 'react';
import { CardList } from './components/CardList/CardList';
import { TabNavigation, TabVariant } from '@/src/features/TabNavigation';
import { useFilterNotifications } from './lib';
import { Notification } from '@/src/entities/notification/types';
import styles from './CardListWithNavigation.module.css';

interface Props {
  initialNotifications: Notification[];
  withNavigation?: boolean;
}

export const CardListWithNavigation = ({
  initialNotifications,
  withNavigation = true,
}: Props) => {
  const [activeTab, setActiveTab] = useState<TabVariant>(TabVariant.All);

  // const { data: notifications } = useGetNotifications({
  //   initialData: initialNotifications,
  // });

  const notifications = useFilterNotifications({
    data: initialNotifications,
    activeTab,
  });

  const handleTabChange = (tab: TabVariant) => {
    setActiveTab(tab);
  };

  const handleAction = useCallback((action: string, target: string) => {
    alert(`Действие: ${action} - ${target}`);
  }, []);

  return (
    <Container className={styles.container}>
      {withNavigation && (
        <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      )}

      <CardList data={notifications} onAction={handleAction} />
    </Container>
  );
};
