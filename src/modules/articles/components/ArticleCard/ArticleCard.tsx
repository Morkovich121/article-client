"use client";

//next
import { useRouter } from "next/navigation";
//styles
import styles from "./ArticleCard.module.css";
//components
import CustomButton from "@/modules/shared/components/CustomButton/CustomButton";
//types
import { ArticleType } from "../../types/articles.type";

type Props = {
  article: Omit<ArticleType, "content">;
};

export default function ArticleCard({ article }: Props) {
  const router = useRouter();

  const onReadMoreClick = () => {
    router.push(`/articles/${article.id}`);
  };

  return (
    <div className={styles.articleCard} data-testid="article-card">
      <h2>{article.title}</h2>
      <span>{article.description}</span>
      <CustomButton text="Read More" onClick={onReadMoreClick} useNextButton />
    </div>
  );
}
