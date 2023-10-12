
import styles from '../../../styles/ChapterTitle.module.css'

interface ChapterTitleProps {
  title: string;
  text: string;
  id: number
}

function ChapterTitle({title, text, id}: ChapterTitleProps) {
  return (
    <div className={styles.ribbon}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{text}</p>
    </div>
  );
}

export default ChapterTitle;
