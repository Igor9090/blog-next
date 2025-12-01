import { BlockMetadata, BlockRating } from '@/domain/posts/posts';

export default function usePostBlocks(block: any[]) {
  const metadata = block.find(
    (data): data is BlockMetadata =>
      data.__component === 'component-metadata.metadata',
  );

  const rating = block.find(
    (score): score is BlockRating =>
      score.__component === 'component-rating.rating',
  );

  return { metadata, rating };
}
