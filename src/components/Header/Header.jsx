import { Moon } from 'lucide-react';
import { MenuItem } from '../MenuItem/MenuItem';
import { SearchInput } from '../SearchInput/SearchInput';
import { Logo } from '../Logo/Logo';
import './header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />

        <nav className="header__menu">
          <MenuItem link="/" content="Home" />
          <MenuItem link="/explore" content="Explore" />
        </nav>

        <div className="header__actions">
          <label className="header__search">
            <SearchInput name="header-search" id="header-search" placeholder="Search..." />
          </label>

          <button
            className="header__theme-toggle"
            type="button"
            aria-pressed="false"
            aria-label="Turn on light mode"
          >
            <Moon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
