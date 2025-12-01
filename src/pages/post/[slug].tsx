import PostPage from '@/containers/PostPage';
import { PostData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getOnePost } from '@/data/posts/getOne-post';

type PostProps = {
  post: PostData;
};

type StrapiResponse<T> = {
  data: T[];
  meta?: any;
};

export default function Post({ post }: PostProps) {
  return (
    <ThemeProvider theme={theme}>
      <PostPage post={post} />
    </ThemeProvider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: StrapiResponse<{ slug: string }> = await fetchJson(
    `${process.env.API_URL}/posts?populate=*`,
  );

  const paths = posts.data.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  let slug = context.params?.slug as string;
  slug = slug.replace('.json', '');

  const post = await getOnePost(slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};
