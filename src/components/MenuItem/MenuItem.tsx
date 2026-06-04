import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

type MenuItemProps = {
  link: string;
  content: string;
};

export function MenuItem({ link, content }: MenuItemProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'hover:bg-secondary/30 hover:text-primary text-secondary rounded-lg px-3 py-1.5 font-medium transition-colors duration-200 ease-in-out',
          isActive && 'bg-secondary/30 text-primary'
        )
      }
      to={link}
    >
      {content}
    </NavLink>
  );
}
