'use client';

import { memo, MouseEvent, useState } from 'react';
import styles from './Card.module.css';
import {
  Notification,
  NotificationType,
} from '@/src/entities/notification/types';
import Image from 'next/image';
import TimeAgo from '@/src/components/TimeAgo';
import { getTextByNotificationType } from './lib/getTextByNotificationType';
import dotsSrc from './assets/dots.png';
import { getUserName } from './lib/getUserName';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';

interface CardProps extends Notification {
  onAction: (action: string, target: string) => void;
}

export const Card = memo(
  ({
    image,
    created,
    user,
    text,
    users,
    target_id,
    type,
    onAction,
  }: CardProps) => {
    const router = useRouter();
    const [isSubscribed, setIsSubscribed] = useState(false);

    const isGrouped = !!users;
    const isShowSubscribeBtn = type === NotificationType.Subscribe;
    const isLike = type === NotificationType.Like;

    const handleCardClick = () => {
      if (isGrouped) {
        router.push(`${type}/${target_id}`);
      } else {
        onAction('action2', `Карточка: ${target_id}`);
      }
    };

    const handleThreeDotsClick = (e: MouseEvent) => {
      e.stopPropagation();
      onAction('action3', `Карточка: ${target_id}`);
    };

    const toggleSubscribe = (e: MouseEvent) => {
      e.stopPropagation();
      setIsSubscribed(!isSubscribed);
    };

    const isComment = type === NotificationType.Comment;

    return (
      <div
        className={styles.card}
        onClick={handleCardClick}
        role="article"
        tabIndex={0}
        aria-label={`Уведомление от ${user.name}`}
      >
        <Image
          src={user.avatar || ''}
          alt={user.name}
          className={styles.avatar}
          width={40}
          height={40}
        />
        <div className={styles.content}>
          <p className={styles.message}>
            <span className={styles.userName}>
              {getUserName(user.name, users)}
            </span>{' '}
            <span>
              {getTextByNotificationType(type, users)} {isComment ? text : ''}
            </span>
          </p>

          <TimeAgo created={created} />
        </div>

        <div
          className={classNames(styles.actions, {
            [styles.absoluteActions]: isShowSubscribeBtn,
          })}
        >
          {isShowSubscribeBtn && (
            <button
              className={styles.subscribeButton}
              onClick={toggleSubscribe}
            >
              {isSubscribed ? 'Отписаться' : 'Подписаться'}
            </button>
          )}

          {!isLike && !isShowSubscribeBtn && (
            <Image
              src={image || ''}
              alt={user.name}
              className={styles.avatar}
              width={40}
              height={40}
            />
          )}

          <button
            className={styles.threeDots}
            onClick={handleThreeDotsClick}
            aria-label="Дополнительные действия"
          >
            <Image src={dotsSrc} width={16.7} height={3.3} alt="dots" />
          </button>
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';
