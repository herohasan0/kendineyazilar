import React, { useState, useEffect } from 'react';

import CONST from '../constants';

import useWindowSize from '../hooks/useWindowSize';

import Tag from './Tag';

import styles from './Tagsection.module.css';

function Tagsection({ ...props }) {
  const size = useWindowSize();

  const [tags, setTags] = useState([]);
  const [opacity, setOpacity] = useState(0);
  const [touchable, setTouchable] = useState('none');
  const [show, setShow] = useState('none');

  useEffect(() => {
    setTags(props.tags);
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
        <h3 className={styles.tagText}>etiketler</h3>
      ) : (
        <div onClick={toggle}>
          <h3 className={styles.tagText}>etiketler</h3>
        </div>
      )}

      <div
        style={{ opacity: opacity, pointerEvents: touchable, display: show }}
      >
        {tags &&
          tags.map((tag) => (
            <Tag
              as={`/etiketler/${tag.etiket}`}
              href={props.href}
              key={tag._id}
              tag={tag.etiket}
              bg
              Tagtitle={tag.etiket}
            />
          ))}
      </div>
    </aside>
  );
}

export default Tagsection;
