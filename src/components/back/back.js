import { NavLink } from 'react-router-dom';

import s from '../back/back.module.css';

export default function Back() {
  return (
    <div className={s.nav}>
      <NavLink to="/" className={s.link}>
        go back
      </NavLink>
    </div>
  );
}
