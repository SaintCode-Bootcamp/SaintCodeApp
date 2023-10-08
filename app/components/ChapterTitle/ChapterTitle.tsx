import cn from '../../../shared/lib/cn/cn';
import s from './ChapterTitle.module.scss';

interface ChapterTitleProps {
  title: string;
  text: string;
  id: number
}

function ChapterTitle({title, text, id}: ChapterTitleProps) {
  return (
    <div className={cn(s.ct__container,{
      [s.ct__green]: id === 1,
      [s.ct__violet]: id === 2,
    })
    }>
      <h2 className={cn(s.ct__title)}>{title}</h2>
      <p className={cn(s.ct__text)}>{text}</p>
    </div>
  );
}

export default ChapterTitle;
