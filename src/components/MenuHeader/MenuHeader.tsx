import SaintCodeLogo from '/svg/SaintCodeLogo.svg';
import placeholder from '/svg/Placeholder.svg';
import styles from './MenuHeader.module.css';
import { useState } from 'react';

function MenuHeader() {
  const session = {
    data: {
      user: {
        image: '',
      },
    },
  }
  const avatar = session?.data?.user?.image;
  const goToLogin = () => {
      window.location.href = '/login';
  }
  return (
    <header className={styles.me__header}>
      <img src={SaintCodeLogo} alt="logo" className={styles.me__logo} />
      <img
        width="40"
        height="40"
        src={avatar ?? placeholder}
        alt="logo"
        className={styles.me__avatar}
        onClick={goToLogin}
      />
    </header>
  );
}

export default MenuHeader;
