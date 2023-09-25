'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import s from './MenuHeader.module.scss';
import cn from '../../../shared/lib/cn/cn';
import SaintCodeLogo from '../../../shared/assets/images/SaintCodeLogo.svg';
import placeholder from './assets/Placeholder.svg';

interface MenuHeaderProps{
  active: boolean;
  setActive: (arg: boolean) => void
};

function MenuHeader({active, setActive}: MenuHeaderProps) {
  const session = useSession();
  const avatar = session?.data?.user?.image;
  console.log(session);

  return (
    <header className={cn(s.me__header)}>
      <Image src={SaintCodeLogo} alt="logo" className={cn(s.me__logo)} />
      <Image
        width="40"
        height="40"
        src={avatar ?? placeholder}
        alt="logo"
        className={cn(s.me__avatar)}
        onClick={() => {setActive(!active)}}
      />
    </header>
  );
}

export default MenuHeader;
