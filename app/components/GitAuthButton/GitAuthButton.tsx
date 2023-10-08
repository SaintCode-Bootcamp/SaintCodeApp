'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import styles from './GitAuthButton.module.css';
import Icons from '../../../shared/lib/Icons';
import IconsEnum from '../../../shared/lib/Icons/IconsEnum';

function GitAuthButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams
    ? searchParams.get('callbackUrl') || '/'
    : '/';

  return (
    <button
      className={styles.gh__btn}
      type="button"
      onClick={() => signIn('github', { callbackUrl })}
    >
      <span className={styles.gh__title}> Войти через GitHub </span>
      <Icons className={styles.gh__icon} name={IconsEnum.GitHub} />
    </button>
  );
}

export default GitAuthButton;
