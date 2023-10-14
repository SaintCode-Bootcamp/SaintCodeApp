'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import SaintCodeLogo from '/public/svg/SaintCodeLogo.svg';
import placeholder from '/public/svg/Placeholder.svg';
import styles from './MenuHeader.module.css'

interface MenuHeaderProps{
  active?: boolean;
  setActive?: (arg: boolean) => void
};

function MenuHeader({active, setActive}: MenuHeaderProps) {
  const session = useSession();
  const avatar = session?.data?.user?.image;

  return (
    <header className={styles.me__header}>
      <Image src={SaintCodeLogo} alt="logo" className={styles.me__logo} />
      <Image
        width="40"
        height="40"
        src={avatar ?? placeholder}
        alt="logo"
        className={styles.me__avatar}
        // onClick={() => {setActive(!active)}}
      />
    </header>
  );
}

export default MenuHeader;
