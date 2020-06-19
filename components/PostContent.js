import React from 'react';
import Postinfo from './Postinfo';
import Btn from './Btn';

import styles from './PostContent.module.css';

function PostContent(props) {
  return (
    <div>
      <Postinfo />
      <p className={styles.PostContent}>
        {props.content.length > 350
          ? props.content.substr(0, 350) + '...'
          : props.content}
      </p>
      <Btn />
    </div>
  );
}

export default PostContent;
