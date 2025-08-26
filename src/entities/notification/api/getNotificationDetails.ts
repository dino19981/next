'use server';

import { API } from '@/src/shared/api/constants/apiPath';
import { NotificationDetailsDto } from '../types';
import { GetNotificationDetailsPayload } from '../types';
import { makeRequest } from '@/src/shared/api';

export const getNotificationDetails = async (
  payload: GetNotificationDetailsPayload
): Promise<NotificationDetailsDto['results']> => {
  const data = await makeRequest({
    url: `${API}/notifications/group/${payload.type}/${payload.id}`,
    entityName: 'notification details',
  });

  return data?.results || [];
};
