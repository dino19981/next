import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '../api';
import { QueryKey } from '@/src/shared/api/constants/queryKey';

interface Props {
  limit: number;
}

export const useGetNotifications = ({ limit }: Props) => {
  return useQuery({
    queryKey: [QueryKey.Notifications],
    queryFn: async () => getNotifications({ limit }),
  });
};
