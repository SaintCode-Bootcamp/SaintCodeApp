import styles from './ChapterTitle.module.css'

interface ChapterTitleProps {
  title: string;
  text: string;
  id: number;
}

function ChapterTitle({ title, text, id }: ChapterTitleProps) {
  const container_style = styles.ct__container + ' ' + (id == 1 ? styles.ct__green : styles.ct__violet )
  return (
    <div
      className={container_style }
    >
      <h2 className={styles.ct__title}>{title}</h2>
      <p className={styles.ct__text}>{text}</p>
    </div>
  );
}

export default ChapterTitle;

