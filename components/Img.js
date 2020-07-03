import React from 'react';
import styles from './Img.module.css';

function Img(props) {
  return (
    <div className={styles.aspectRatioContainer}>
      <img className={styles.Img} src={props.src} alt="" />
    </div>
  );
}

export default Img;
