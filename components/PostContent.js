import React from 'react';
import Postinfo from './Postinfo';
import Btn from './Btn';
import Img from './Img';
import ReactMarkdown from 'react-markdown';

import useWindowSize from '../hooks/useWindowSize';

import SIZE from '../constants';

import styles from './PostContent.module.css';

function PostContent({ imgCover = false, ...props }) {
  console.log(props.customStyle);

  const size = useWindowSize();
  let width;
  let height;

  if (size.width >= SIZE.TABLET_SIZE) {
    width = 800;
    height = 400;
  } else {
    width = 365;
    height = 180;
  }

  return (
    <div>
      <Postinfo Author={props.Author} Tag={props.Tag} Date={props.Date} />
      {imgCover && props.imgId && (
        <Img
          src={`https://picsum.photos/id/${props.imgId}/${width}/${height}?grayscale`}
        />
      )}
      <div className={styles.Container} style={props.customStyle}>
        <ReactMarkdown className={styles.PostContent} source={props.content} />
        {!props.noBtn && <Btn id={props.id} Baslik={props.Baslik} />}
      </div>
    </div>
  );
}

export default PostContent;
