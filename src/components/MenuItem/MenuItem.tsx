import { NavLink } from 'react-router-dom';
import './menu-item.css';

type MenuItemProps = {
  link: string;
  content: string;
};

export function MenuItem({ link, content }: MenuItemProps) {
  return (
    <NavLink className='header__menu-item' to={link}>
      {content}
    </NavLink>
  );
}
