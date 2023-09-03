'use client';

import Image from 'next/image';
import s from './MenuHeader.module.scss';
import cn from '@/shared/lib/cn/cn';
import SaintCodeLogo from '@/shared/assets/images/SaintCodeLogo.svg';
import { useSession } from "next-auth/react";

function MenuHeader() {
    const session = useSession();
    const avatar = session?.data?.user?.image
  console.log(session)

  return (
    <header className={cn(s.me__header)}>
      <Image src={SaintCodeLogo} alt="" className={cn(s.me__logo)} />
      <Image width="40" height="40" src={avatar ?? ""} alt="" className={cn(s.me__avatar)} />
    </header>
  );
}

export default MenuHeader;
