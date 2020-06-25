import React from 'react';
import styles from './Logo.module.css';
import { Icon } from './icons';
import Link from 'next/link';

function Logo({ children }) {
  return (
    <Link href="/">
      <a className={styles.Logo}>
        <Icon />
      </a>
    </Link>
  );
}

export default Logo;
