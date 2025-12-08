export type PostID = number;

export type PostAuthor = {
  id: PostID;
  name: string;
  slug: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type PostCategory = {
  id: PostID;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  id: PostID;
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

export type PostImages = PostCoverFormat & {
  id: PostID;
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

// TYPES PARA OS BLOCKS
export type BlockMetadata = {
  __component: 'component-metadata.metadata';
  id: PostID;
  direction: string;
  screenplay: string;
  cast: string;
  genre: string;
  duration: string;
  rating: string;
  year: string;
};

export type BlockText = {
  __component: 'component-text.text';
  id: PostID;
  section_title: string;
  content: string;
};

export type BlockList = {
  __component: 'component-list.list';
  id: PostID;
  section_title: string;
  list_type: 'bullet' | 'numbered';
  items: string[];
};

export type BlockRating = {
  __component: 'component-rating.rating';
  id: PostID;
  section_title: string;
  content: string;
  score: string;
};

export type BlockQuote = {
  __component: 'component-quote.quote';
  id: PostID;
  quote_text: string;
  character: string;
  highlight: boolean;
};

// UNION TYPE PARA TODOS OS BLOCKS
export type PostBlock =
  | BlockMetadata
  | BlockText
  | BlockList
  | BlockRating
  | BlockQuote;

// TYPE PRINCIPAL ATUALIZADO
export type PostData = {
  id: PostID;
  title: string;
  content: string; // Mantém vazio ou remove se não usar mais
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  created_by: PostCreatedBy;
  updated_by: PostCreatedBy;
  created_at: string;
  updated_at: string;
  cover: PostCover;
  Images: PostImages[];
  blocks: PostBlock[]; // NOVO CAMPO COM OS BLOCKS
};
