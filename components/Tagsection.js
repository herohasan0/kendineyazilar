import React, { useState, useEffect } from 'react';

import Tag from './Tag';

import styles from './Tagsection.module.css';

function Tagsection({ ...props }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(props.tags);
  });

  return (
    <aside className={styles.Tagsection}>
      <h3>Etiketler</h3>
      <div>
        {tags &&
          tags.map((tag) => (
            <Tag key={tag._id} tag={tag.etiket} bg Tagtitle={tag.etiket} />
          ))}
      </div>
    </aside>
  );
}

export default Tagsection;
