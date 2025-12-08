// components/PostContent/index.tsx
'use client';

import { Container } from './styled';
import { PostData } from '@/domain/posts/posts';
import TextBlock from '../postBlocks/TextBlock';
import ListBlock from '../postBlocks/ListBlock';
import RatingBlock from '../postBlocks/RatingBlock';
import MetadataBlock from '../postBlocks/MetadataBlock';

type PostContentProps = {
  post: PostData;
};

export default function PostContent({ post }: PostContentProps) {
  return (
    <Container>
      <div className="infoBlock">
        <TextBlock block={post.blocks} />
        <ListBlock block={post.blocks} />
        <RatingBlock block={post.blocks} />
      </div>
      <div className="dataBlock">
        <MetadataBlock block={post.blocks} slugUrl={post.author.slug} />
      </div>
    </Container>
  );
}
