//styles
import styles from "./SingleArticleHeader.module.css";

type Props = {
  title: string;
  description: string;
};

export default function SingleArticleHeader({ title, description }: Props) {
  return (
    <div className={styles.articleHeader}>
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  );
}
