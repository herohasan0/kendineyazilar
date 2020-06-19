import React from 'react';
import A from './a';

import styles from './Time.module.css';

function Time({ children }) {
  return (
    <div className={styles.Time}>
      <A>
        <time>03 2020</time>
      </A>
    </div>
  );
}

export default Time;
