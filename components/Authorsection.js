import React, { useState, useEffect } from 'react';

import Tag from './Tag';

import styles from './Tagsection.module.css';

function Authorsection({ ...props }) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    setAuthors(props.authors);
  });

  return (
    <aside className={styles.Tagsection}>
      <h3>Yazarlar</h3>
      <div>
        {authors &&
          authors.map((author) => (
            <Tag
              key={author._id}
              tag={author.username}
              bg
              Tagtitle={author.username}
            />
          ))}
      </div>
    </aside>
  );
}

export default Authorsection;
