export type PostData = {
  seq?: number;
  title: string;
  content: string;
  thumbnail?: string;
  tag: string;
  createdAt?: string;
};

export type PostList = {
  page: number;
  pageSize: number;
  totalPage: number;
  totalElement: number;
  search: string;
  data: PostData[];
};
