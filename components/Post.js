import React from 'react';
import Title from './Title';
import Content from './PostContent';

import styles from './Post.module.css';

function Post({ children }) {
  return (
    <div className={styles.Post}>
      <main>
        <article>
          <header>
            <Title title="Başlık" />
          </header>
          <Content
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Et molestie ac feugiat sed lectus. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Blandit cursus risus at ultrices. Arcu dictum varius duis at consectetur lorem. Volutpat ac tincidunt vitae semper quis lectus nulla. Vel eros donec ac odio tempor. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.
Nunc sed id semper risus in hendrerit gravida. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Morbi tincidunt ornare massa eget egestas purus. Integer feugiat scelerisque varius morbi enim. Magna sit amet purus gravida quis blandit. Neque gravida in fermentum et sollicitudin ac orci phasellus. Tristique senectus et netus et malesuada fames ac. Auctor elit sed vulputate mi. Malesuada fames ac turpis egestas maecenas. Interdum velit laoreet id donec ultrices tincidunt arcu. Ullamcorper a lacus vestibulum sed arcu non. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Elit ut aliquam purus sit amet luctus venenatis lectus. Pellentesque dignissim enim sit amet. Tincidunt augue interdum velit euismod in pellentesque. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Tristique senectus et netus et malesuada fames ac turpis. Ac turpis egestas integer eget aliquet. Aliquam malesuada bibendum arcu vitae."
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
