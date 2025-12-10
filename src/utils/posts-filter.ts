import { PostData } from '@/domain/posts/posts';
import { getPostBlocks } from './use-post-block';

export function getPostsBlocks(posts: PostData[]) {
  return posts.map((post) => ({
    post,
    blocks: getPostBlocks(post.blocks),
  }));
}
