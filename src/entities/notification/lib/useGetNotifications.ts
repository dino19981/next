import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '../api';
import { QueryKey } from '@/src/shared/api/constants/queryKey';
import { NotificationsDto } from '../types';

interface Props {
  initialData: NotificationsDto;
}

export const useGetNotifications = ({ initialData }: Props) => {
  return useQuery({
    queryKey: [QueryKey.Notifications],
    queryFn: async () => getNotifications(),
    initialData,
  });
};
