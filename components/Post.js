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
          />
        </article>
      </main>
    </div>
  );
}

export default Post;

{
  /* <main>
  <article>
    <header>
      <h1>Article title</h1>
    </header>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
      <p>Paragraph 3</p>
      <aside>
        <p>Text block</p>
      </aside>
    <footer>
      <img src="/subscribe.png">
    </footer>
  </article>
</main> */
}

// For time

{
  /* <article>
  <h1>Title</h1>
   <p>The event will begin on <time datetime="2019-12-25">December 25th</time> and last for <time datetime="PT12H30M0S">12 and a half hours</time>.</p>
</article> */
}
