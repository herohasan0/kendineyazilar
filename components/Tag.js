import React from 'react';
import A from './a';

import cn from 'classnames';

import styles from './Tag.module.css';

function Tag({ bg = false, ...props }) {
  return (
    <A
      className={cn(styles.Tag, bg && styles.bg)}
      tag={props.tag}
      as={props.as}
      href={props.href}
    >
      {props.Tagtitle}
    </A>
  );
}

export default Tag;
