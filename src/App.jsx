import { Header } from '@/components/Header/Header';
import { SearchInput } from './components/SearchInput/SearchInput';
import { ArrowRight, Zap } from 'lucide-react';
import { Logo } from './components/Logo/Logo';

export function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <span className="hero__powered">
            <Zap size={14} />
            Powered by GitHub API
          </span>
          <h1 className="hero__title">
            Discover developers <br />
            <span>through data.</span>
          </h1>
          <p className="hero__description">
            Search GitHub profiles, explore repositories, analyze contribution patterns, and
            understand any developer at a glance.
          </p>

          <form className="hero__search">
            <SearchInput
              iconSize={25}
              name="hero-search"
              id="hero-search"
              placeholder="Search by GitHub username..."
            />
            <button className="hero__search-btn" type="button">
              Search
              <ArrowRight size={15} />
            </button>
          </form>
        </section>

        <section className="platform-preview">
          <p className="eyebrow">PLATFORM PREVIEW</p>
          <h2 className="platform-preview__title">
            Everything you need to know
            <br />
            <span>about any developer.</span>
          </h2>

          <img src="/public/profile-mockup.webp" className="plataform-preview__exhibition" />
        </section>
      </main>
      <footer>
        <Logo />

        <p>Built with the GitHub API · Not affiliated with GitHub, Inc.</p>
      </footer>
    </>
  );
}
