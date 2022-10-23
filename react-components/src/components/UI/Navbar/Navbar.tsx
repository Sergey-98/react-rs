import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
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
