import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import Postcard from '../../components/Post';
import Main from '../../components/Main';
import Leftside from '../../components/Leftside';
import Topside from '../../components/Topside';

import CONST from '../../constants';

import useWindowSize from '../../hooks/useWindowSize';

function Post({ posts, tags, authors }) {
  const [width, setWidth] = useState();

  const size = useWindowSize();

  useEffect(() => {
    setWidth(size.width);
  });
  return (
    <Layout>
      {width > CONST.TABLET_SIZE ? (
        <Leftside tags={tags} authors={authors} />
      ) : (
        <Topside tags={tags} authors={authors} />
      )}
      <Main>
        {posts.map((post) => (
          <Postcard
            id={post._id}
            key={post._id}
            title={post.Baslik}
            Author={post.Yazar.username}
            Tag={post.Etiket[0].etiket}
            text={
              post.Icerik.length > 350
                ? post.Icerik.substr(0, 350) + '...'
                : post.Icerik
            }
            Date={
              post.createdAt.substr(5, 2) + '.' + post.createdAt.substr(0, 4)
            }
          />
        ))}
      </Main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://kendineyazilar.herokuapp.com/tags');
  const tags = await res.json();

  const paths = tags.map((tag) => ({
    params: { id: tag.etiket },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://kendineyazilar.herokuapp.com/posts?Etiket.etiket=${params.id}`
  );
  const resTag = await fetch('https://kendineyazilar.herokuapp.com/tags');
  const resAuthor = await fetch('https://kendineyazilar.herokuapp.com/users');

  const tags = await resTag.json();
  const authors = await resAuthor.json();
  const posts = await res.json();

  return {
    props: {
      posts,
      tags,
      authors,
    },
  };
}

export default Post;
