import React from 'react';
import A from './a';

import styles from './Time.module.css';

function Time({ ...props }) {
  return (
    <div className={styles.Time}>
      <A>
        <time>{props.Date}</time>
      </A>
    </div>
  );
}

export default Time;
