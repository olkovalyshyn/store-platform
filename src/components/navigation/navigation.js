import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>

      <li>
        <NavLink to="/user">User</NavLink>
      </li>
    </ul>
  );
}
