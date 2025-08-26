import React from 'react';
import styles from './Container.module.css';

export const Container = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  return (
    <div {...props} className={`${styles.container} ${props.className}`} />
  );
};
