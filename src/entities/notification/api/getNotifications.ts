'use server';

import { makeRequest } from '@/src/shared/api';
import { NotificationsDto } from '../types';
import { API } from '@/src/shared/api/constants/apiPath';

export const getNotifications = async ({
  limit,
}: {
  limit: number;
}): Promise<NotificationsDto> => {
  const data = await makeRequest({
    url: `${API}/notifications?limit=${limit}`,
    entityName: 'notifications',
  });

  return data;
};
