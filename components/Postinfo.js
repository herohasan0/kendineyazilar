import React from 'react';
import Tag from './Tag';
import Author from './Author';
import Time from './Time';
import Readtime from './Readtime';

import styles from './Postinfo.module.css';

function Postinfo({ ...props }) {
  return (
    <div className={styles.Postinfo}>
      <Tag Tagtitle={props.Tag} /> | <Author Author={props.Author} /> |{' '}
      <Time Date={props.Date} />
      | <Readtime />
    </div>
  );
}

export default Postinfo;
