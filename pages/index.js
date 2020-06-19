import Layout from '../components/layout';
import Post from '../components/Post';
import Main from '../components/Main';

function HomePage() {
  return (
    <Layout>
      <Main>
        <Post />
        <Post />
        <Post />
      </Main>
    </Layout>
  );
}

export default HomePage;
