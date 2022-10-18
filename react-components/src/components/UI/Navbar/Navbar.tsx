import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.navbar__links}>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/about">О сайте</NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
