import { PostData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';

type StrapiPostResponse = {
  data?: PostData[];
  meta?: Record<string, unknown>;
};

export const getAllPost = async (query = ''): Promise<PostData[]> => {
  const baseURL = process.env.API_URL!;

  const post: StrapiPostResponse = await fetchJson(
    `${baseURL}/posts?${query}&populate=*`,
  );

  if (!post?.data || !Array.isArray(post.data)) {
    return [];
  }

  return post.data;
};
