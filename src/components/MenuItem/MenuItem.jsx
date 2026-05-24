import { NavLink } from 'react-router-dom';
import './menu-item.css';

export function MenuItem({ link, content }) {
  return (
    <NavLink className="header__menu-item" to={link}>
      {content}
    </NavLink>
  );
}
