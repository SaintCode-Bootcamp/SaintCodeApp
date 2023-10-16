// import { signIn } from 'next-auth/react';
// import { useSearchParams } from 'next/navigation';
import styles from './GitAuthButton.module.css';

function GitAuthButton() {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams
  //   ? searchParams.get('callbackUrl') || '/'
  //   : '/';
  const login = () => {
    // signIn('github', { callbackUrl });
  }
  return (
    <button
      className={styles.gh__btn}
      type="button"
      onClick={login}
    >
      <span className={styles.gh__title}> Войти через GitHub </span>
      <img src='/svg/github.svg' className={styles.gh__icon}/>
    </button>
  );
}

export default GitAuthButton;
