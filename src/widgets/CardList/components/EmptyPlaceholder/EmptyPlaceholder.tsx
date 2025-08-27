import React from 'react';

import imageSrc from './assets/noItemsImage.png';

import styles from './EmptyPlaceholder.module.css';
import Image from 'next/image';
import { UNBREAKABLE_SEPARATOR } from '@/src/shared/constants/separator';

export const EmptyPlaceholder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src={imageSrc} width={168} height={184} alt="girl" />

        <h3 className={styles.title}>Пока нет информации</h3>
        <p className={styles.text}>
          Репосты, отметки «Нравится» и{UNBREAKABLE_SEPARATOR}многое
          {UNBREAKABLE_SEPARATOR}другое{UNBREAKABLE_SEPARATOR}—
          {UNBREAKABLE_SEPARATOR}здесь{UNBREAKABLE_SEPARATOR}вы
          {UNBREAKABLE_SEPARATOR}найдете{UNBREAKABLE_SEPARATOR}все
          взаимодействия с контентом.
        </p>
      </div>
    </div>
  );
};
