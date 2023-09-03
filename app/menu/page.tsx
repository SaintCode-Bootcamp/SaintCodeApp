'use client';
import s from './menu.module.scss';
import cn from '@/shared/lib/cn/cn';
import MenuHeader from '../components/MenuHeader/MenuHeader';
import IconsEnum from '@/shared/lib/Icons/IconsEnum';
import Icons from '@/shared/lib/Icons';
import AchievementsButton from '../components/AchievementsButton/AchievementsButton';
import ProgressRing from '@/app/components/ProgressRing/ProgressRing';
import { useSession } from "next-auth/react";

const Menu = () => {
    const session = useSession();
    const username = session?.data?.user?.name
    console.log(session)
  return(
  <div className={cn(s.me__background)}>
    <MenuHeader />
    <div className={cn(s.me__container)}>
      <div className={cn(s.me__profile)}>
        <div className={cn(s.me__profile_container)}>
          <p className={cn(s.me__username)}>{username}</p>
          <div className={cn(s.me__registration)}>
            <p className={cn(s.me__text_secondary)}>Зарегестрирован: </p>
            <p className={cn(s.me__text_primary)}>21.08.2013</p>
          </div>

          <div className={cn(s.me__binding)}>
            <p className={cn(s.me__text_secondary)}>Профили</p>
            <Icons className={s.me__icon} name={IconsEnum.GitHub} />
          </div>
        </div>
        <div className={cn(s.me__achievements)}>
          <AchievementsButton />
        </div>
      </div>
      <div className={cn(s.me__results)}>
        <div className={cn(s.me__profile_container)}>
          <p className={cn(s.me__title)}>Прогресс</p>
          <div className={cn(s.me__registration)}>
            <p className={cn(s.me__text_secondary)}>Всего закончено: </p>
            <p className={cn(s.me__text_primary)}>28</p>
          </div>
          <div className={cn(s.me__registration)}>
            <p className={cn(s.me__text_secondary)}>Достижений получено: </p>
            <p className={cn(s.me__text_primary)}>12</p>
          </div>
          <ProgressRing color="white" />
        </div>
      </div>
    </div>
  </div>)
};

export default Menu;
