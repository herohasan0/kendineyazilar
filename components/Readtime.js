import React from 'react';

import styles from './Readtime.module.css';

function Readtime({ children }) {
  return (
    <div className={styles.Readtime}>
      <p>5 mins to read</p>
    </div>
  );
}

export default Readtime;
