import React from 'react';
import Tagsection from './Tagsection';
import Authorsection from './Authorsection';

import styles from './Topside.module.css';

function Topside({ children, ...props }) {
  return (
    <div className={styles.Topside}>
      <Tagsection tags={props.tags} href="/etiketler/[id]" />
      <Authorsection authors={props.authors} href="/yazarlar/[id]" />
    </div>
  );
}

export default Topside;
