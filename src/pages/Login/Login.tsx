import GitAuthButton from '../../components/GitAuthButton/GitAuthButton';
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.background}>
      <div className={styles.logo}>
        <img
          src="svg/samurai.svg"
          alt="samurai logo"
          className={styles.samurai}
          width="100"
          height="100"
        />
        <img
          src="svg/logo.svg"
          alt="saintcode"
          className={styles.title}
          width={100}
          height={100}
        />
      </div>
      <div className={styles.button}>
        <GitAuthButton/>
      </div>
    </div>
  );
}
