import styles from '../../styles/Login.module.css'
import Link from 'next/link'

export default function Login() {
  const login = () => {
    console.log('login')
  }
  return (
    <>
      <header>
        <nav>
          <Link href="/" > Main </Link>
        </nav>
      </header>
      <main>
        <form className={styles.login}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" onClick={login}>Login</button>
        </form>
      </main>

      <footer>
        FOOTER
      </footer>
    </>
  )
}
