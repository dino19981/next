import {
  Notification,
  NotificationType,
} from '@/src/entities/notification/types';
import { TabVariant } from '@/src/features/TabNavigation';
import { useMemo } from 'react';

interface Props {
  data: Notification[];
  activeTab: TabVariant;
}

const validTypesByTab = {
  [TabVariant.All]: Object.values(NotificationType),
  [TabVariant.Communication]: [NotificationType.Comment, NotificationType.Like],
  [TabVariant.Actions]: [NotificationType.Repost, NotificationType.Subscribe],
};

export const useFilterNotifications = ({ data, activeTab }: Props) => {
  return useMemo(() => {
    const types = validTypesByTab[activeTab];

    return data.filter((item) => types.includes(item.type));
  }, [activeTab, data]);
};
