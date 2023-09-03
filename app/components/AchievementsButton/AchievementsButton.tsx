import cn from '@/shared/lib/cn/cn';
import s from '@/app/components/AchievementsButton/AchievementsButton.module.scss';

function AchievementsButton() {
  return (
    <button className={cn(s.ac__btn)} type="button">
      <span className={cn(s.ac__title)}> Достижений получено </span>
    </button>
  );
}

export default AchievementsButton;
