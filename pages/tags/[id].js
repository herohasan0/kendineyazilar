import Layout from '../../components/layout';
import Postcard from '../../components/Post';
import Main from '../../components/Main';
import Leftside from '../../components/Leftside';

function Post({ posts }) {
  return (
    <Layout>
      <Leftside />
      <Main>
        {posts.map((post) => (
          <Post
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
  const res = await fetch('https://kendineyazilar.herokuapp.com/posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://kendineyazilar.herokuapp.com/posts?Etiket.etiket=${param.id}`
  );
  const posts = await res.json();

  // Pass post data to the page via props
  return { props: { posts } };
}

export default Post;
