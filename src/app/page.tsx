//api
import { fetchArticles } from "@/modules/articles/api/articles.api";
//components
import ArticleList from "@/modules/articles/components/ArticlesList/ArticlesList";
//styles
import styles from "./page.module.css";
import Image from "next/image";

export default async function HomePage() {
  const articles = await fetchArticles();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.iconBox}>
          <Image
            src="/assets/icons/star.svg"
            alt="Star Icon"
            className={styles.titleIcon}
            width={32}
            height={32}
          />
        </div>
        <span>General Articles</span>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}
