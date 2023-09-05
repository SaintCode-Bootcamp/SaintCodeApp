'use client';
import { useSession } from 'next-auth/react';

export const page = () => {
  const session = useSession();
  return <div>page</div>;
};
