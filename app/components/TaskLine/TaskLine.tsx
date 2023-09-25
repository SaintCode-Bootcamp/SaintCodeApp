import cn from '../../../shared/lib/cn/cn';
import s from './TaskLine.module.scss';
interface TaskLineProps{
  chapter: number;
  progress: number;
  id: number;
}

function TaskLine({chapter,progress, id}: TaskLineProps) {
  if (progress === 0) return (
    <div className={cn(s.ts__container, {[s.ts__position_left]: id % 2 != 0,
      [s.ts__position_right]: id % 2 == 0})}>
    </div>
  );
  else
  return (
    <div>

      <span className={cn(s.line_1, {[s.ts__position_left]: id % 2 != 0,
       [s.ts__position_right]: id % 2 == 0})}>
      </span>
      <span className={cn(s.line_2, {[s.ts__position_left]: id % 2 != 0,
       [s.ts__position_right]: id % 2 == 0})}>
      </span>
      <span className={cn(s.line_3, {[s.ts__position_left]: id % 2 != 0,
        [s.ts__position_right]: id % 2 == 0})}>
       </span>
    </div>
  );
}

export default TaskLine;
