import React from 'react';
import styles from './layout.module.css';

function Stack({ children }) {
  return <div className={styles.layout}>{children}</div>;
}

export default Stack;
