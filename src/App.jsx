import { Header } from '@/components/Header/Header';
import { SearchInput } from './components/SearchInput/SearchInput';
import { ArrowRight, Zap } from 'lucide-react';

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
      </main>
    </>
  );
}
