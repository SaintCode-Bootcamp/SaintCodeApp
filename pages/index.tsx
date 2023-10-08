import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Link href="login">Login</Link>
        </nav>
      </header>
      <main>INFO</main>
      <footer>FOOTER</footer>
    </>
  );
}
