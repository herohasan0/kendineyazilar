import React from 'react';
import Postinfo from './Postinfo';
import Btn from './Btn';
import ReactMarkdown from 'react-markdown';

import styles from './PostContent.module.css';

function PostContent(props) {
  return (
    <div>
      <Postinfo Author={props.Author} Tag={props.Tag} Date={props.Date} />
      <ReactMarkdown className={styles.PostContent} source={props.content} />
      {!props.noBtn && <Btn id={props.id} />}
    </div>
  );
}

export default PostContent;
