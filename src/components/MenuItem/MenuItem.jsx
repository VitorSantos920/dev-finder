import './menu-item.css';

export function MenuItem({ link, content }) {
  return (
    <a className="header__menu-item" href={link}>
      {content}
    </a>
  );
}
