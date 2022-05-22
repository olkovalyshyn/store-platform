import { NavLink } from 'react-router-dom';
import s from '../navigation/navigation.module.css';

export default function Navigation() {
  return (
    <div className={s.nav}>
      <NavLink to="/product" className={s.link}>
        Products
      </NavLink>
      <NavLink to="/user" className={s.link}>
        Users
      </NavLink>
    </div>
  );
}
