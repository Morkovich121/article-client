"use client";

import { useEffect, useState } from "react";
//components
import ArticleList from "@/modules/articles/components/ArticlesList/ArticlesList";
import Image from "next/image";
//styles
import styles from "./page.module.css";
//types
import { ArticleType } from "@/modules/articles/types/articles.type";
//api
import { fetchArticles } from "@/modules/articles/api/articles.api";

export default function HomePage() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const articles = await fetchArticles();

        setArticles(articles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
      }
    };

    fetch();
  }, []);

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
