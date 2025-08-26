import { NotificationType } from '@/src/entities/notification/types';
import { UserDto } from '@/src/entities/user/types';
import { pluralize } from '@/src/shared/pluralize';

const messageByType = {
  [NotificationType.Comment]: 'ответил вам ',
  [NotificationType.Like]: 'нравится ваша публикация',
  // todo: не увидел на макете примера
  [NotificationType.Repost]: 'репостнул вашу запись',
  [NotificationType.Subscribe]: 'подписался на вашу общую подписку ',
};

const messageByTypeFor2Users = {
  [NotificationType.Comment]: 'ответили вам ',
  [NotificationType.Like]: 'нравится ваша публикация',
  // todo: не увидел на макете примера
  [NotificationType.Repost]: 'репостнули вашу запись',
  [NotificationType.Subscribe]: 'подписались на вашу общую подписку ',
};

const messageByTypeMultiple = {
  [NotificationType.Comment]: 'и еще count ответили вам ',
  [NotificationType.Like]: 'и еще count понравилась ваша публикация ',
  // todo: не увидел на макете примера
  [NotificationType.Repost]: 'и еще count репостнули вашу запись ',
  [NotificationType.Subscribe]:
    'и еще count подписались на вашу общую подписку ',
};

export const getTextByNotificationType = (
  type: NotificationType,
  users: UserDto[] | undefined
) => {
  if (users && users.length > 2) {
    return messageByTypeMultiple[type].replace(
      'count',
      pluralize(
        users.length - 2,
        'пользователю',
        'пользователям',
        'пользователям'
      )
    );
  }

  const isOnly2Users = users?.length === 2;

  if (isOnly2Users) {
    return messageByTypeFor2Users[type];
  }

  return messageByType[type];
};
