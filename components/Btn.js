import React from 'react';
import styles from './Btn.module.css';
import Link from 'next/link';

function Btn({ ...props }) {
  return (
    <Link href="/yazilar/[id]" as={`/yazilar/${props.id}`}>
      <a>
        <button className={styles.Btn} type="button">
          Devam
        </button>
      </a>
    </Link>
  );
}

export default Btn;
