'use client';
import Link from 'next/link';
import { Header, Title } from './styled';
import { useRouter } from 'next/router';

export default function HeaderPages() {
  const router = useRouter();

  const isPostPage = router.pathname.startsWith('/post');

  return (
    <Header $transparent={isPostPage}>
      <Link href="/">
        <Title>CineScope</Title>
      </Link>
    </Header>
  );
}
