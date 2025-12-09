import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styled';

type CommentProps = {
  slug: string;
  title: string;
};

export default function Comments({ slug, title }: CommentProps) {
  return (
    <Container>
      <DiscussionEmbed
        shortname="meublog-gf16ukaifa"
        config={{
          url: `https://blognextstrapi.netlify.app`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
}
