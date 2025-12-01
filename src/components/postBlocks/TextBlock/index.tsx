// components/post-blocks/TextBlock/TextBlock.tsx
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { PostBlock, BlockText } from '@/domain/posts/posts';

type TextBlockProps = {
  block: PostBlock[];
};

export default function TextBlock({ block }: TextBlockProps) {
  const textBlocks = block.filter(
    (block): block is BlockText => block.__component === 'component-text.text',
  );

  if (textBlocks.length === 0) return null;

  return (
    <>
      {textBlocks.map((textBlock, index) => (
        <section key={index} className="text-block">
          <h2 className="subtitle">{textBlock.section_title}</h2>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {textBlock.content}
          </ReactMarkdown>
        </section>
      ))}
    </>
  );
}
