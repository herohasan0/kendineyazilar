import Head from 'next/head';
import React from 'react';
import Logo from './Logo';
import Line from './Line';

import styles from './layout.module.css';

function Stack({ children }) {
  return (
    <div className={styles.layout}>
      <Logo />
      {children}
    </div>
  );
}

export default Stack;
