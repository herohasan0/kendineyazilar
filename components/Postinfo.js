import React from 'react';
import Tag from './Tag';
import Author from './Author';
import Time from './Time';
import Readtime from './Readtime';

import styles from './Postinfo.module.css';

function Postinfo({ children }) {
  return (
    <div className={styles.Postinfo}>
      <Tag /> | <Author /> | <Time /> | <Readtime />
    </div>
  );
}

export default Postinfo;
