'use client';

import { signOut } from 'next-auth/react';

import s from './LogOutButton.module.scss';
import cn from '../../../shared/lib/cn/cn';

function LogOutButton() {


  return (
    <button
      className={cn(s.so__btn)}
      type="button"
      onClick={() => signOut( { callbackUrl:"/signin" })}
    >
      <span className={cn(s.so__title)}> Выйти </span>
    </button>
  );
}

export default LogOutButton;
