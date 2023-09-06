/* eslint-disable */
import s from './ProgressRing.module.scss';
import cn from '@/shared/lib/cn/cn';

interface ProgressRingProps {
  userProgress: number;
  color: string;
}

function ProgressRing({ userProgress, color }: ProgressRingProps) {
  let radius = 4.73;
  let circumference = radius * 2 * Math.PI;
  let offset = circumference;

  function setProgress(percent: number) {
    offset = circumference - (percent / 100) * circumference;
  }

  setProgress(userProgress);

  return (
    <div className={cn(s.pr__wrapper)}>
      <svg className={cn(s.pr__indicator)}>
        <circle className={cn(s.pr__indicator_track)} />
        <circle
          className={cn(
            s.pr__indicator_indication,
            {
              [s.pr__indicator_indication_green]: color === 'green',
              [s.pr__indicator_indication_violet]: color === 'violet',
            },
            [],
          )}
          strokeDasharray={circumference + 'vh'}
          strokeDashoffset={offset + 'vh'}
        />
      </svg>
    </div>
  );
}

export default ProgressRing;
