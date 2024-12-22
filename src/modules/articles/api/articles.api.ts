const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchArticles = async () => {
  const res = await fetch(`${API_URL}/articles`);

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  return res.json();
};

export const fetchArticleById = async (id: number) => {
  const response = await fetch(`${API_URL}/articles/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }

  return response.json();
};
