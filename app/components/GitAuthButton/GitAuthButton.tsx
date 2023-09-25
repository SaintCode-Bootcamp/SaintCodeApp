'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

import s from './GitAuthButton.module.scss';
import cn from '../../../shared/lib/cn/cn';
import Icons from '../../../shared/lib/Icons';
import IconsEnum from '../../../shared/lib/Icons/IconsEnum';

function GitAuthButton() {
  const searchParams = useSearchParams();
  // @ts-ignore
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
    <button
      className={cn(s.gh__btn)}
      type="button"
      onClick={() => signIn('github', { callbackUrl:"/menu" })}
    >
      <span className={cn(s.gh__title)}> Войти через GitHub </span>
      <Icons className={s.gh__icon} name={IconsEnum.GitHub} />
    </button>
  );
}

export default GitAuthButton;
