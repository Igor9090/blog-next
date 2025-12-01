// components/post-blocks/RatingBlock/RatingBlock.tsx
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { PostBlock, BlockRating } from '@/domain/posts/posts';

type RatingBlockProps = {
  block: PostBlock[];
};

export default function RatingBlock({ block }: RatingBlockProps) {
  const ratingBlocks = block.filter(
    (block): block is BlockRating =>
      block.__component === 'component-rating.rating',
  );

  if (ratingBlocks.length === 0) return null;

  return (
    <>
      {ratingBlocks.map((ratingBlock, index) => (
        <section key={index} className="rating-block">
          <h2 className="subtitle">{ratingBlock.section_title}</h2>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {ratingBlock.content}
          </ReactMarkdown>
          <div className="rating-score"> {ratingBlock.score}</div>
        </section>
      ))}
    </>
  );
}
