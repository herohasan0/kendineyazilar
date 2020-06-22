import React from 'react';
import Postinfo from './Postinfo';
import Btn from './Btn';

import styles from './PostContent.module.css';

function PostContent(props) {
  return (
    <div>
      <Postinfo Author={props.Author} Tag={props.Tag} Date={props.Date} />
      <p className={styles.PostContent}>{props.content}</p>
      <Btn />
    </div>
  );
}

export default PostContent;
