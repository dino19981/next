import { Container } from '@/src/components/Container';
import React from 'react';
import styles from './Header.module.css';
import { ThemeToggle } from '@/src/components/ThemeToggle';
import { cookies } from 'next/headers';
import {
  Theme,
  THEME_COOKIE_NAME,
} from '@/src/components/ThemeToggle/constants';

export const Header = async () => {
  const cookie = await cookies();
  const theme = cookie.get(THEME_COOKIE_NAME)?.value || Theme.Light;

  return (
    <header>
      <Container className={styles.header}>
        <h1 className={styles.title}>Уведомления</h1>
        <ThemeToggle defaultTheme={theme as Theme} />
      </Container>
    </header>
  );
};
