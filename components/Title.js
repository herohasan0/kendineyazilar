import React from 'react';
import styles from './Title.module.css';

function Title(props) {
  return <h2 className={styles.Title}>{props.title}</h2>;
}

export default Title;
