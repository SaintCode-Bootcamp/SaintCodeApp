'use client';

import s from './menu.module.scss';
import cn from '../../shared/lib/cn/cn';
import MenuHeader from '../../app/components/MenuHeader/MenuHeader';
import AccountSlider from "../../app/components/AccountSlider/AccounSlider";
import { useEffect, useState } from "react";
import TaskNavigation from "../../app/components/TaskNavigation/TaskNavigation";


function Menu() {
  const [active, setActive] = useState(true)
  useEffect(() => {setActive(active)}, [active])
  console.log(active);
  return (
    <div className={cn(s.me__background)}>
      <MenuHeader setActive = {setActive} active = {active}  />
      <div className={cn(s.me__slider,{
        [s.hide]: active,
      })}>
      <AccountSlider />
      </div>
      <div className={s.me__navigation}>
      <TaskNavigation/>
      </div>
    </div>
  );
}

export default Menu;
