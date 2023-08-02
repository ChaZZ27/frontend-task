import { Layout } from "../components/layout";
import Headline from "@/atoms/headline/Headline";
import PostCardGrid from "@/organisms/PostCardsGrid/PostCardsGrid";
import { PostsProps } from "types/posts";

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  
  return {
      props: {
          posts
      }
  };
}

function Home({posts}: PostsProps) {
  
  return (
    <Layout>
      <Headline text="Check our latest Posts" className="headline-lg" />
      <PostCardGrid posts={posts} />
    </Layout>
  )
}

export default Home;