'use client';

import { Container } from './styled';

type ContentProps = {
  content: string;
};

export default function Footer() {
  return (
    <Container>
      <p>Site feito por IgorVN</p>
    </Container>
  );
}
