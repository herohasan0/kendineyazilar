import React from 'react';
import styles from './Img.module.css';

function Img(props) {
  return <img className={styles.Img} src={props.src} alt="" />;
}

export default Img;
