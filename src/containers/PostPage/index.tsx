import { PostData, BlockText } from '@/domain/posts/posts';
import { Container, Content, Title } from './styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import PostContent from '@/components/PostContent';
import PostCover from '@/components/PostCover';
import Comments from '@/components/comments';
import { SITE_NAME } from '@/configs/config';
import Head from 'next/head';
import { removeHtmlTags } from '@/utils/remove-html';

type PostPageProps = {
  post: PostData;
};

export default function PostPage({ post }: PostPageProps) {
  const sinopseBlock = post.blocks.find(
    (block): block is BlockText =>
      block.__component === 'component-text.text' &&
      block.section_title?.toLowerCase() === 'sinopse',
  );

  const sinopse = sinopseBlock?.content || '';
  const metaDescription = removeHtmlTags(sinopse).substring(0, 155);

  return (
    <>
      <Head>
        <title>{`${SITE_NAME} - ${post.title}`}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <ThemeProvider theme={theme}>
        <Container>
          <PostCover
            coverURL={post.Images[0].formats.large.url}
            alt={post.title}
          />
          <Content>
            <Title>{post.title}</Title>
            <PostContent post={post} />
          </Content>
          <Comments slug={post.slug} title={post.title} />
        </Container>
      </ThemeProvider>
    </>
  );
}
