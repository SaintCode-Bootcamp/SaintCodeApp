'use client';
import styles from '../../styles/Header.module.css'
import Image from 'next/image';
import { useSession } from 'next-auth/react';


function Header() {
  const session = useSession();
  const avatar:string = session?.data?.user?.image ?? '/svg/Placeholder.svg';

  return (
    <header className={styles.topHeader} >
      <Image src="/svg/SaintCodeLogo.svg" alt="logo" width={100} height={64} />
      <Image
        width="40"
        height="40"
        src={avatar}
        alt="logo"
      />
    </header>
  );
}

export default Header;
