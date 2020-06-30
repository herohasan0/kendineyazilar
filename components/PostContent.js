import React from 'react';
import Postinfo from './Postinfo';
import Btn from './Btn';
import Img from './Img';
import ReactMarkdown from 'react-markdown';

import styles from './PostContent.module.css';

function PostContent({ imgCover = false, ...props }) {
  return (
    <div>
      <Postinfo Author={props.Author} Tag={props.Tag} Date={props.Date} />
      {imgCover && props.imgId && (
        <Img
          src={`https://picsum.photos/id/${props.imgId}/800/400?grayscale`}
        />
      )}
      <ReactMarkdown className={styles.PostContent} source={props.content} />
      {!props.noBtn && <Btn id={props.id} />}
    </div>
  );
}

export default PostContent;
