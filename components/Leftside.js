import React from 'react';
import Tagsection from '../components/Tagsection';

import styles from './Leftside.module.css';

function Leftside({ children }) {
  return (
    <div className={styles.Leftside}>
      <Tagsection Taghead="etiketler" />
      <Tagsection Taghead="yazarlar" />
    </div>
  );
}

export default Leftside;
