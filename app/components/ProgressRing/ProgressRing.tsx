/* eslint-disable */
import s from './ProgressRing.module.scss';
import cn from '../../../shared/lib/cn/cn';
import { mockSession } from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;
import PercentProgress from "../../../app/components/PercentProgress/PercentProgress";

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
      <PercentProgress progress = {userProgress}/>
    </div>
  );
}

export default ProgressRing;
