import React from 'react';
import styles from './Logo.module.css';
import { Icon } from './icons';

function Logo({ children }) {
  return (
    <div className={styles.Logo}>
      <Icon />
    </div>
  );
}

export default Logo;
