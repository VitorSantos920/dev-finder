import { NavLink } from 'react-router-dom';

type MenuItemProps = {
  link: string;
  content: string;
};

export function MenuItem({ link, content }: MenuItemProps) {
  return (
    <NavLink
      className='text-secondary hover:bg-secondary/30 hover:text-primary rounded-lg px-3 py-1.5 font-medium transition-colors duration-200 ease-in-out'
      to={link}
    >
      {content}
    </NavLink>
  );
}
