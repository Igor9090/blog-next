// components/post-blocks/MetadataBlock/MetadataBlock.tsx
import { PostBlock, BlockMetadata } from '@/domain/posts/posts';
import { Container, Info, InfoCast } from './styled';
import Link from 'next/link';

type MetadataBlockProps = {
  block: PostBlock[];
  slugUrl: string;
};

export default function MetadataBlock({ block, slugUrl }: MetadataBlockProps) {
  const metadataBlock = block.find(
    (block): block is BlockMetadata =>
      block.__component === 'component-metadata.metadata',
  );

  if (!metadataBlock) return null;

  return (
    <Container className="movie-metadata">
      <Info>
        {metadataBlock.year} • {metadataBlock.rating} • {metadataBlock.duration}
      </Info>

      <InfoCast>
        <div className="metadata-item">
          <span>Direção:</span>{' '}
          <Link href={`/directors/${slugUrl}`} className='link'>{metadataBlock.direction}</Link>
        </div>
        <div className="metadata-item">
          <span>Elenco:</span> {metadataBlock.cast}
        </div>
        <div className="metadata-item">
          <span>Gênero:</span> {metadataBlock.genre}
        </div>
      </InfoCast>
    </Container>
  );
}
