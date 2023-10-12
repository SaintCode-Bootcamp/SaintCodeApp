import Image from 'next/image';
import cn from '../../../shared/lib/cn/cn';
import s from './TaskSelect.module.scss';
import firstChapterTask from './assets/first_chapter_task.svg'
import secondChapterTask from './assets/second_chapter_task.svg'
import lockedChapterTask from './assets/locked_chapter_task.svg'
import check from './assets/check.svg'
import PercentProgress from "../PercentProgress/PercentProgress";
import styles from './TaskSelect.module.css'

interface TaskSelectProps{
  chapter: number;
  progress: number;
  id: number;
}

function TaskSelect({chapter,progress, id}: TaskSelectProps) {
  let taskSrc = '';
  if (progress === 0) return (
    <div className={styles.container}>
      <Image src={lockedChapterTask} alt="task" className={styles.overlay} />
    </div>
  );
  else
  switch (chapter) {
    case 1:
      taskSrc = firstChapterTask
      break
    case 2:
      taskSrc = secondChapterTask
      break
    default:
      taskSrc = lockedChapterTask
  }
  return (
    <div className={styles.container}>
      <Image src={taskSrc} alt="task" />
      <div className={styles.overlay}>
        {progress !== 100 && <PercentProgress progress={progress} />}
        {progress === 100 && (
          <Image src={check} alt="check" className={styles.check } />
        )}
      </div>

      {/* {(progress !== 100) && <PercentProgress progress={progress}/>}
      {(progress === 100) && <Image src={check} alt="check" />} */}
      {/*<TaskLine/>*/}
    </div>
  );
}

export default TaskSelect;
