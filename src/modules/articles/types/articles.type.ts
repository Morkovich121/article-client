export type ArticleContentType = {
  title: string;
  text: string;
};

export type ArticleType = {
  id: number;
  title: string;
  description: string;
  content: ArticleContentType[];
};
