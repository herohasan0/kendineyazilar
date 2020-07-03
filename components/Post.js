import React from 'react';
import Title from './Title';
import Content from './PostContent';

import styles from './Post.module.css';

function Post({ ...props }) {
  return (
    <div className={styles.Post}>
      <main>
        <article>
          <header>
            <Title title={props.title} />
          </header>
          <Content
            Tag={props.Tag}
            Date={props.Date}
            Author={props.Author}
            content={props.text}
            id={props.id}
            noBtn={props.noBtn}
            imgCover={props.imgCover}
            imgId={props.imgId}
            Baslik={props.title}
            customStyle={props.customStyle}
          />
        </article>
      </main>
    </div>
  );
}

export default Post;

{
  /* <article>
  <h1>Title</h1>
   <p>The event will begin on <time datetime="2019-12-25">December 25th</time> and last for <time datetime="PT12H30M0S">12 and a half hours</time>.</p>
</article> */
}
