import React from 'react';
import styles from './a.module.css';

function A({ href, className, children, ...props }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

export default A;
