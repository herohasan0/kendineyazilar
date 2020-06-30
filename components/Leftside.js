import React from 'react';
import Tagsection from '../components/Tagsection';
import Authorsection from '../components/Authorsection';

import styles from './Leftside.module.css';

function Leftside({ children, ...props }) {
  return (
    <div className={styles.Leftside}>
      <Tagsection tags={props.tags} href="/etiketler/[id]" />
      <Authorsection authors={props.authors} href="/yazarlar/[id]" />
    </div>
  );
}

export default Leftside;
