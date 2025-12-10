import { BlockMetadata, BlockRating, PostBlock } from '@/domain/posts/posts';

export function getPostBlocks(blocks: PostBlock[]) {
  const metadata = blocks.find(
    (data): data is BlockMetadata =>
      data.__component === 'component-metadata.metadata',
  );

  const rating = blocks.find(
    (score): score is BlockRating =>
      score.__component === 'component-rating.rating',
  );

  return { metadata, rating };
}
