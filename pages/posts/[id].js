import Layout from '../../components/layout';
import Postcard from '../../components/Post';
import Main from '../../components/Main';
import Leftside from '../../components/Leftside';

function Post({ post }) {
  return (
    <Layout>
      <Leftside />
      <Main>
        <Postcard
          key={post._id}
          title={post.Baslik}
          Author={post.Yazar.username}
          Tag={post.Etiket[0].etiket}
          text={post.Icerik}
          Date={post.createdAt.substr(5, 2) + '.' + post.createdAt.substr(0, 4)}
          noBtn
        />
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
    `https://kendineyazilar.herokuapp.com/posts/${params.id}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

export default Post;
