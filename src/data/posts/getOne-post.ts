import { PostData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';

type StrapiResponse<T> = {
  data: T[];
  meta?: any;
};

export const getOnePost = async (slug: string): Promise<PostData | null> => {
  const baseURL = process.env.API_URL!;

  const res: StrapiResponse<PostData> = await fetchJson(
    `${baseURL}/posts?filters[slug][$eq]=${slug}&populate=*`,
  );

  if (!res.data || res.data.length === 0) {
    return null;
  }

  return res.data[0];
};
