import HomePage from '@/containers/HomePage';
import { getAllPost } from '@/data/posts/getAll-post';
import { PostData } from '@/domain/posts/posts';
import { theme } from '@/styles/theme';
import { GetServerSideProps, GetStaticProps } from 'next';
import { ThemeProvider } from 'styled-components';

type PostProps = {
  posts: PostData[];
  director: string;
};

export default function DirectorPage({ posts, director }: PostProps) {
  return (
    <ThemeProvider theme={theme}>
      <HomePage directors={director} posts={posts} />
    </ThemeProvider>
  );
}

export const getServerSideProps: GetServerSideProps<{
  posts: PostData[];
}> = async (context) => {
  const authorSlug = context.params?.slug as string;

  if (!authorSlug) {
    return { props: { posts: [] } };
  }

  const query = `filters[author][slug][$containsi]=${encodeURIComponent(authorSlug)}&sort=id:desc`;

  const posts = await getAllPost(query);

  return {
    props: { posts, director: context.query },
  };
};
