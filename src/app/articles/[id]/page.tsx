//api
import { fetchArticleById } from "@/modules/articles/api/articles.api";
//components
import SingleArticleHeader from "@/modules/articles/components/SingleArticleHeader/SingleArticleHeader";
import ArticleContent from "@/modules/articles/components/ArticleContent/ArticleContent";
import ArticleBackButton from "@/modules/articles/components/ArticleBackButton/ArticleBackButton";
//types
import { ArticleType } from "@/modules/articles/types/articles.type";
//validators
import { validateNumericQuery } from "@/modules/shared/validators/common.validator";
//router
import { notFound } from "next/navigation";
//styles
import styles from "./page.module.css";

type Props = {
  params: { id: string };
};

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = await params;

  const validationResult = validateNumericQuery(id);

  if (validationResult.error || !validationResult.value) {
    notFound();
  }

  const article: ArticleType | null = await fetchArticleById(
    validationResult.value
  );

  if (!article) {
    notFound();
  }

  const { content } = article;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <SingleArticleHeader
          title={article.title}
          description={article.description}
        />
        {content.map((section, index) => (
          <ArticleContent
            key={index}
            title={section.title}
            description={section.text}
            isLastSection={index === content.length - 1}
          />
        ))}
      </div>
      <ArticleBackButton />
    </div>
  );
}
