//components
import ArticleCard from "../ArticleCard/ArticleCard";
//styles
import styles from "./ArticlesList.module.css";

interface Article {
  id: number;
  title: string;
  description: string;
}

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className={styles.articleList}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
