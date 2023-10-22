import React from 'react';
import './App.css';

import { useEffect, useState } from 'react';

import TaskNavigation from '../components/TaskNavigation/TaskNavigation';
import MenuHeader from '../components/MenuHeader/MenuHeader';
import { UserArea } from '../components/UserArea/UserArea';

function App() {
  const [active, setActive] = useState(true);
  useEffect(() => {
    setActive(active);
  }, [active]);
  return (
    <>
      <MenuHeader />
      <TaskNavigation />
      <UserArea />
    </>
  );
}

export default App;
