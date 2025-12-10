import PostPage from '@/containers/PostPage';
import { PostData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getOnePost } from '@/data/posts/getOne-post';
import { useRouter } from 'next/router';
import Error from 'next/error';
import PageLoading from '@/components/PageLoading';

type PostProps = {
  post: PostData;
};

type StrapiResponse<T> = {
  data?: T[];
  meta?: Record<string , unknown>;
};

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <PageLoading />;
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

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

  const paths =
    posts.data?.map((post) => ({
      params: { slug: post.slug },
    })) || [];

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  let slug = (context.params?.slug as string) || '';
  slug = slug.replace('.json', '');

  const post = await getOnePost(slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 600,
  };
};
