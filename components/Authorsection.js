import React, { useState, useEffect } from 'react';

import Tag from './Tag';

import CONST from '../constants';

import useWindowSize from '../hooks/useWindowSize';

import styles from './Tagsection.module.css';

function Authorsection({ ...props }) {
  const size = useWindowSize();

  const [authors, setAuthors] = useState([]);
  const [opacity, setOpacity] = useState(0);
  const [touchable, setTouchable] = useState('none');
  const [show, setShow] = useState('none');

  useEffect(() => {
    setAuthors(props.authors);
    if (size.width > CONST.TABLET_SIZE) {
      setShow('flex');
      setTouchable('auto');
      setOpacity(1);
    }
  });

  function toggle() {
    if (opacity) {
      setOpacity(0);
      setTouchable('none');
      setShow('none');
    } else {
      setOpacity(1);
      setTouchable('auto');
      setShow('flex');
    }
  }

  return (
    <aside className={styles.Tagsection}>
      {size.width > CONST.TABLET_SIZE ? (
        <h3 className={styles.tagText}>yazarlar</h3>
      ) : (
        <div onClick={toggle}>
          <h3 className={styles.tagText}>yazarlar</h3>
        </div>
      )}

      <div
        style={{ opacity: opacity, pointerEvents: touchable, display: show }}
      >
        {authors &&
          authors.map((author) => (
            <Tag
              as={`/yazarlar/${author.username}`}
              href={props.href}
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
