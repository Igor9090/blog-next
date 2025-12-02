import { PostData } from '@/domain/posts/posts';
import { Blur, Container, Data, Div, Layout } from './styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import Link from 'next/link';
import usePostBlocks from '@/utils/use-post-block';
import Head from 'next/head';
import { SITE_NAME } from '@/configs/config';

type HomePageProps = {
  posts: PostData[];
};

export default function PostCards({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name="description"
          content="Blog dedicado ao mundo do cinema: análises, críticas, novidades, lançamentos e listas dos melhores filmes."
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Container>
            {posts.map((post) => {
              const { metadata, rating } = usePostBlocks(post.blocks);

              return (
                <>
                  <Div key={post.id}>
                    <Link href={`/post/${post.slug}`}>
                      <img
                        className="thumb"
                        src={post.cover.formats.thumbnail.url}
                        alt={post.title}
                      />

                      <Blur>
                        <img
                          className="small"
                          src={post.cover.formats.small.url}
                          alt={post.title}
                        />
                        <Data>
                          <span className="title">{post.title}</span>

                          <span className="rating">{metadata?.rating}</span>
                          <span className="year">{metadata?.year}</span>
                          <span className="duration">{metadata?.duration}</span>
                          <span className="genre">{metadata?.genre}</span>
                          <span className="score">{rating?.score}</span>
                        </Data>
                      </Blur>
                    </Link>
                  </Div>
                </>
              );
            })}
          </Container>
        </Layout>
      </ThemeProvider>
    </>
  );
}
