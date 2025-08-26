export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface Card {
  id: string;
  user: User;
  content: string;
  timestamp: string;
  type: 'all' | 'subscription' | 'mention';
  isLiked?: boolean;
  isSubscribed?: boolean;
  isGrouped?: boolean;
  groupedCards?: Card[];
  isExpanded?: boolean;
}
