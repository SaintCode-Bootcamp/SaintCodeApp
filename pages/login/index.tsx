import GitAuthButton from '../../app/components/GitAuthButton/GitAuthButton'
import styles from '../../styles/Login.module.css'
import Image from 'next/image'

export default function Login() {
  return (
    <div className={styles.background}>
      <div className={styles.logo}>
        <Image src="/svg/samurai.svg" alt="samurai logo" className={styles.samurai} width="100" height="100" />
        <Image src="/svg/logo.svg" alt="saintcode" className={styles.title} width={100} height={100} />
      </div>
      <div className={styles.button}>
        <GitAuthButton />
      </div>
    </div>
  )
}
