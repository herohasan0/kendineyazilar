import Layout from '../components/layout';
import Post from '../components/Post';
import Main from '../components/Main';
import Leftside from '../components/Leftside';

function HomePage({ posts }) {
  return (
    <Layout>
      <Leftside />
      <Main>
        {posts.map((post) => (
          <Post
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

export async function getStaticProps() {
  const res = await fetch('https://kendineyazilar.herokuapp.com/posts');
  const posts = await res.json();
  console.log(posts[0].createdAt.substr(0, 4));
  console.log(posts[0].createdAt.substr(5, 2));

  return {
    props: {
      posts,
    },
  };
}

export default HomePage;
