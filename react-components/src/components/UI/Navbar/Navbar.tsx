import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Props } from 'types/types';

class Navbar extends React.Component<Record<string, React.ReactNode>, { value: string }> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.navbar__links}>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/about">О сайте</NavLink>
          <NavLink to="/form">Форма</NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
