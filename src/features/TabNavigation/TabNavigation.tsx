'use client';

import { KeyboardEvent, memo } from 'react';
import { tabs } from './constants';
import styles from './TabNavigation.module.css';
import { TabVariant } from './types';

interface TabNavigationProps {
  activeTab: TabVariant;
  onTabChange: (tab: TabVariant) => void;
}

export const TabNavigation = memo(
  ({ activeTab, onTabChange }: TabNavigationProps) => {
    const handleKeyDown = (
      event: KeyboardEvent<HTMLButtonElement>,
      id: TabVariant
    ) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onTabChange(id);
      }
    };

    return (
      <div
        className={styles.tabNavigation}
        role="tablist"
        aria-label="Навигация по уведомлениям"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={0}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.active : ''
            }`}
            onClick={() => onTabChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
          >
            <span className={styles.label}>{tab.label}</span>
          </button>
        ))}
      </div>
    );
  }
);

TabNavigation.displayName = 'TabNavigation';
