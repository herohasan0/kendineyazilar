import React from 'react';
import A from './a';

import styles from './Author.module.css';

function Author({ children }) {
  return (
    <div className={styles.Author}>
      <A>Author1</A>
    </div>
  );
}

export default Author;
