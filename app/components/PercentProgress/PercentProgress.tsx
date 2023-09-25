import cn from '../../../shared/lib/cn/cn';
import s from "./PercentProgress.module.scss"

interface PercentProgressProps {
  progress: number
}

function PercentProgress({progress}: PercentProgressProps) {
  return (
    <span className={cn(s.pp__percent)}>{progress}%</span>
  );
}

export default PercentProgress ;
