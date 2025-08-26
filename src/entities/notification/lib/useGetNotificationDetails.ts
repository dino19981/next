import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '@/src/shared/api/constants/queryKey';
import { GetNotificationDetailsPayload } from '../types';
import { getNotificationDetails } from '../api/getNotificationDetails';

export const useGetNotificationDetails = (
  payload: GetNotificationDetailsPayload
) => {
  return useQuery({
    queryKey: [QueryKey.NotificationDetails, payload.id],
    queryFn: async () => getNotificationDetails(payload),
    enabled: false,
  });
};
