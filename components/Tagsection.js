import React from 'react';

import Tag from './Tag';

import styles from './Tagsection.module.css';

function Tagsection({ ...props }) {
  return (
    <aside className={styles.Tagsection}>
      <h3>{props.Taghead}</h3>
      <div>
        <Tag bg Tagtitle="Tag1" />
        <Tag bg Tagtitle="Tagsection" />
        <Tag bg Tagtitle="Tagother" />
        <Tag bg Tagtitle="Tagnew" />
        <Tag bg Tagtitle="Tag2" />
        <Tag bg Tagtitle="Tagtagtag" />
      </div>
    </aside>
  );
}

export default Tagsection;
