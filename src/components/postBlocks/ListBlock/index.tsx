// components/post-blocks/ListBlock/ListBlock.tsx
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { PostBlock, BlockList } from '@/domain/posts/posts';

type ListBlockProps = {
  block: PostBlock[];
};

export default function ListBlock({ block }: ListBlockProps) {
  const listBlocks = block.filter(
    (block): block is BlockList => block.__component === 'component-list.list',
  );

  if (listBlocks.length === 0) return null;

  return (
    <>
      {listBlocks.map((listBlock, index) => {
        const ListComponent = listBlock.list_type === 'numbered' ? 'ol' : 'ul';

        return (
          <section key={index} className="list-block">
            <h2 className="subtitle">{listBlock.section_title}</h2>
            <ListComponent className="list">
              {listBlock.items.map((item, itemIndex) => (
                <li key={itemIndex} className="list-item">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {item}
                  </ReactMarkdown>
                </li>
              ))}
            </ListComponent>
          </section>
        );
      })}
    </>
  );
}
