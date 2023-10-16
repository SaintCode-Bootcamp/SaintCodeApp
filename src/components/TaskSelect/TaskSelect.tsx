import firstChapterTask from '/svg/first_chapter_task.svg';
import secondChapterTask from '/svg/second_chapter_task.svg';
import lockedChapterTask from '/svg/locked_chapter_task.svg';
import check from '/svg/check.svg';
import PercentProgress from '../PercentProgress/PercentProgress';
import styles from './TaskSelect.module.css';

interface TaskSelectProps {
  chapter: number;
  progress: number;
  id: number;
}

function TaskSelect({ chapter, progress }: TaskSelectProps) {
  let taskSrc = '';
  if (progress === 0)
    return (
      <div className={styles.container}>
        <img src={lockedChapterTask} alt="task" className={styles.overlay} />
      </div>
    );
  else
    switch (chapter) {
      case 1:
        taskSrc = firstChapterTask;
        break;
      case 2:
        taskSrc = secondChapterTask;
        break;
      default:
        taskSrc = lockedChapterTask;
    }
  return (
    <div className={styles.container}>
      <img src={taskSrc} alt="task" />
      <div className={styles.overlay}>
        {progress !== 100 && <PercentProgress progress={progress} />}
        {progress === 100 && (
          <img src={check} alt="check" className={styles.check} />
        )}
      </div>
    </div>
  );
}

export default TaskSelect;
