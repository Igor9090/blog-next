import { PostData } from '@/domain/posts/posts';
import { Container, Content, Title } from './styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import PostContent from '@/components/PostContent';
import PostCover from '@/components/PostCover';
import Comments from '@/comments';
import MetadataBlock from '@/components/postBlocks/MetadataBlock';

type PostPageProps = {
  post: PostData;
};

export default function PostPage({ post }: PostPageProps) {
  return (
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
  );
}
