import { PostData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';

type StrapiPostResponse = {
  data: any[];
  meta?: any;
};

export const getAllPost = async (query = ''): Promise<PostData[]> => {
  const baseURL = process.env.API_URL!;
  const post: StrapiPostResponse = await fetchJson(
    `${baseURL}/posts?${query}&populate=*`,
  );

  return post.data;
};
