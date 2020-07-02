import React from 'react';
import styles from './Img.module.css';

import useWindowSize from '../hooks/useWindowSize';

function Img(props) {
  const size = useWindowSize();
  const width = size.width;

  return (
    <div className={styles.aspectRatioContainer}>
      <img className={styles.Img} src={props.src} alt="" />
    </div>
  );
}

export default Img;
