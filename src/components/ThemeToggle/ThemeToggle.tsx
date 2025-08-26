'use client';

import React, { useState, useLayoutEffect } from 'react';
import Cookies from 'js-cookie';
import styles from './ThemeToggle.module.css';
import { Theme, THEME_COOKIE_NAME } from './constants';

interface Props {
  defaultTheme: Theme;
}

export function ThemeToggle({ defaultTheme }: Props) {
  const [isDark, setIsDark] = useState(() => defaultTheme === Theme.Dark);

  const setTheme = (value: Theme) => {
    Cookies.set(THEME_COOKIE_NAME, value, {
      expires: 30 * 60 * 60 * 1000,
    });
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.setAttribute('data-theme', Theme.Dark);
      setTheme(Theme.Dark);
    } else {
      document.documentElement.setAttribute('data-theme', Theme.Light);
      setTheme(Theme.Light);
    }
  };

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={
        isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'
      }
      title={isDark ? 'Светлая тема' : 'Темная тема'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
