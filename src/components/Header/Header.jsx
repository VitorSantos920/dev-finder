import { Computer, Moon, Search } from 'lucide-react';
import './header.css';
import { MenuItem } from '../MenuItem/MenuItem';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="/">
          <div className="header__logo-container">
            <Computer size={15} />
          </div>
          <div className="header__logo-info">
            Dev
            <span>Finder</span>
          </div>
        </a>

        <nav className="header__menu">
          <MenuItem link="/" content="Home" />
          <MenuItem link="/explore" content="Explore" />
        </nav>

        <div className="header__actions">
          <label className="header__search">
            <Search size={15} />
            <input
              type="search"
              name="search"
              id="search"
              aria-label="Buscar no site"
              placeholder="Search..."
            />
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
