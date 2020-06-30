import React from 'react';

import Link from 'next/link';

import styles from './a.module.css';

function A({ className, children, ...props }) {
  return (
    <Link href={`${props.href}`} as={props.as}>
      <a className={className} rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  );
}

export default A;

{
  /* <Link href="/tags/[id]" as={`/posts/${props.id}`} {...props}>
      <a className={styles.Btn} rel="noopener noreferrer">
        {children}
      </a>
    </Link> */
}
