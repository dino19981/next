import { UserDto } from '../../user/types';

export interface NotificationsDto {
  total: number;
  limit: number;
  offset: number;
  results: Notification[];
}

export interface Notification {
  type: NotificationType;
  target_id: string;
  user: UserDto;
  text: string;
  created: string;
  image: string | null;
  users?: UserDto[];
  other_count?: number;
}

export enum NotificationType {
  Repost = 'repost',
  Like = 'like',
  Comment = 'comment',
  Subscribe = 'subscribe',
}
