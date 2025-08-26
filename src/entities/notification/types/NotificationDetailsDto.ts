import { UserDto } from '../../user/types';
import { NotificationType } from './NotificationsDto';

export interface NotificationDetailsDto {
  type: NotificationType;
  target_id: string;
  total: number;
  limit: number;
  offset: number;
  results: NotificationDetail[];
}

export interface NotificationDetail {
  type: NotificationType;
  target_id: string;
  user: UserDto;
  text: string;
  created: string;
  image: string;
}
