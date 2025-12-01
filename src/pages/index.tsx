import HomePage from '@/containers/HomePage';
import { getAllPost } from '@/data/posts/getAll-post';
import { PostData } from '@/domain/posts/posts';
import { theme } from '@/styles/theme';
import { GetStaticProps } from 'next';
import { ThemeProvider } from 'styled-components';

type PostProps = {
  posts: PostData[];
};

export default function Home({ posts }: PostProps) {
  return (
    <ThemeProvider theme={theme}>
      <HomePage posts={posts} />
    </ThemeProvider>
  );
}

export const getStaticProps = (async (context) => {
  const posts = await getAllPost('sort=id:desc');
  return { props: { posts } };
}) satisfies GetStaticProps<{ posts: PostData[] }>;
