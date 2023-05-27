import React from 'react';

import styles from './Header.module.scss';
import { GlobalSvgSelector } from '../../assets/global/GlobalSvgSelector';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { HeaderLogo } from './HeaderLogo';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const theme = useTheme();

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <header className={styles.header} data-testid="Header">
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo}>
          <HeaderLogo />
          {/* <GlobalSvgSelector id="header-logo" /> */}
          <h2 className={styles.title}>Weather & Clock</h2>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme} onClick={changeTheme}>
          <span className={`${theme.theme === Theme.DARK ? styles.moon : styles.sun}`}></span>
        </div>
      </div>
    </header>
  );
};
