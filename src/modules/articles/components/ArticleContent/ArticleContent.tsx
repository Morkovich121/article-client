//styles
import styles from "./ArticleContent.module.css";

type Props = {
  title: string;
  description: string;
  isLastSection?: boolean;
};

export default function ArticleContent({
  title,
  description,
  isLastSection,
}: Props) {
  return (
    <div
      className={
        isLastSection ? styles.articleLastContent : styles.articleContent
      }
    >
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  );
}
