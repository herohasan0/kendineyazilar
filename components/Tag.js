import React from 'react';
import A from './a';

import styles from './Tag.module.css';

function Tag({ children }) {
  return (
    <div className={styles.Tag}>
      <A>tag1</A>
    </div>
  );
}

export default Tag;
