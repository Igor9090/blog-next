import { PostData } from '@/domain/posts/posts';
import { Layout, Container, DirectorsTitle, Div, Blur, Data } from './styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import Head from 'next/head';
import { SITE_NAME } from '@/configs/config';
import { getPostsBlocks } from '@/utils/posts-filter';

type HomePageProps = {
  posts: PostData[];
  directors?: string;
};

export default function PostCards({ posts, directors }: HomePageProps) {
  const postsWithBlocks = getPostsBlocks(posts); // ✅ função pura, sem hook

  return (
    <>
      <Head>
        <title>
          {directors ? `${SITE_NAME} - ${posts[0].author.name}` : SITE_NAME}
        </title>
        <meta
          name="description"
          content="Blog dedicado ao mundo do cinema: análises, críticas, novidades, lançamentos e listas dos melhores filmes."
        />
      </Head>
      <ThemeProvider theme={theme}>
        <DirectorsTitle>
          {directors && posts.length > 0 && (
            <div>Filmes de {posts[0].author.name}</div>
          )}
        </DirectorsTitle>
        <Layout>
          <Container>
            {postsWithBlocks.map(({ post, blocks }) => {
              const { metadata, rating } = blocks;

              return (
                <Div key={post.id}>
                  <a href={`/post/${post.slug}`}>
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
                  </a>
                </Div>
              );
            })}
          </Container>
        </Layout>
      </ThemeProvider>
    </>
  );
}
