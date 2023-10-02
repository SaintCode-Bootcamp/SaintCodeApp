import Image from 'next/image';
import cn from '../../../shared/lib/cn/cn';
import s from './TaskSelect.module.scss';
import firstChapterTask from './assets/first_chapter_task.svg'
import secondChapterTask from './assets/second_chapter_task.svg'
import lockedChapterTask from './assets/locked_chapter_task.svg'
import check from './assets/check.svg'
import PercentProgress from "../PercentProgress/PercentProgress";

interface TaskSelectProps{
  chapter: number;
  progress: number;
  id: number;
}

function TaskSelect({chapter,progress, id}: TaskSelectProps) {
  let taskSrc = '';
  if (progress === 0) return (
    <div className={cn(s.ts__container, {[s.ts__position_left]: id % 2 != 0,
      [s.ts__position_right]: id % 2 == 0})}>
      <Image src={lockedChapterTask} alt="task" className={cn(s.ts__task)} />
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
    <div >
      <Image src={taskSrc} alt="task" className={cn(s.ts__task)} />
      {(progress !== 100) && <PercentProgress progress={progress}/>}
      {(progress === 100) && <Image src={check} alt="check" className={cn(s.ts__check)}/>}
      {/*<TaskLine/>*/}
    </div>
  );
}

export default TaskSelect;
