import React from 'react';
import { Link } from 'react-router-dom';

import s from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className={s.menuToggle}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul className={s.menu}>
          <li> <Link to={'/login'}>Login</Link></li>
          <li> <Link to={'/login'}>Login</Link></li>
          <li> <Link to={'/login'}>Login</Link></li>
          <li> <Link to={'/login'}>Login</Link></li>
          <li> <Link to={'/login'}>Login</Link></li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;
