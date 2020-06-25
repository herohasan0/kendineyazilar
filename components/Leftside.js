import React from 'react';
import Tagsection from '../components/Tagsection';
import Authorsection from '../components/Authorsection';

import styles from './Leftside.module.css';

function Leftside({ children, ...props }) {
  return (
    <div className={styles.Leftside}>
      <Tagsection tags={props.tags} />
      <Authorsection authors={props.authors} />
    </div>
  );
}

export default Leftside;
