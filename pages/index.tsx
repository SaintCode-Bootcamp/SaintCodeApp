import TaskNavigation from '../app/components/TaskNavigation/TaskNavigation';
import { useEffect, useState } from 'react';
import MenuHeader from '../app/components/MenuHeader/MenuHeader';

export default function Home() {
  const [active, setActive] = useState(true);
  useEffect(() => {
    setActive(active);
  }, [active]);
  return (
    <>
      <MenuHeader />
      <TaskNavigation />
    </>
  );
}
