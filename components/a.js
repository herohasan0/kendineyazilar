import React from 'react';
import Link from 'next/link';

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
