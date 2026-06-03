import { ChangeEvent, SubmitEvent, useState } from 'react';
import {
  ArrowRight,
  ChartNoAxesColumn,
  Code,
  Search,
  Users,
  Zap,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { FeatureItem } from '@/components/FeatureItem/FeatureItem';
import { Footer } from '@/components/Footer/Footer';
import { useAutoFocus } from '@/hooks/useAutoFocus';
import { usePageTitle } from '@/hooks/usePageTitle';

export function Home() {
  const [username, setUsername] = useState('');
  const searchInputRef = useAutoFocus();
  const navigate = useNavigate();
  usePageTitle('devfinder - Discover developers through data');

  function handleSearch(event: SubmitEvent) {
    event.preventDefault();

    const trimmed = username.toLowerCase().trim();
    if (!trimmed) return;
    navigate(`/user/${trimmed}`);
  }

  return (
    <>
      <main className='container'>
        <section className='hero'>
          <span className='hero__powered'>
            <Zap size={14} />
            Powered by GitHub API
          </span>
          <h1 className='hero__title'>
            Discover developers <br />
            <span>through data.</span>
          </h1>
          <p className='hero__description'>
            Search GitHub profiles, explore repositories, analyze contribution
            patterns, and understand any developer at a glance.
          </p>

          <form className='hero__search' onSubmit={handleSearch}>
            <SearchInput
              ref={searchInputRef}
              iconSize={25}
              name='hero-search'
              id='hero-search'
              placeholder='Search by GitHub username...'
              value={username}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setUsername(event.target.value)
              }
            />
            <button
              type='submit'
              className='hero__search-btn'
              disabled={!username}
            >
              Search
              <ArrowRight size={15} />
            </button>
          </form>
        </section>

        <section className='platform-preview'>
          <header>
            <p className='eyebrow'>PLATFORM PREVIEW</p>
            <h2 className='platform-preview__title'>
              Everything you need to know
              <br />
              <span>about any developer.</span>
            </h2>
          </header>

          <img
            src='/profile-mockup.webp'
            className='platform-preview__exhibition'
          />
        </section>

        <section className='features'>
          <header>
            <p className='eyebrow'>Features</p>
            <h2 className='features__title'>Built for developer exploration</h2>
          </header>

          <div className='features__items'>
            <FeatureItem
              icon={Search}
              title='Intelligent Search'
              description='Find any developer on GitHub instantly with real-time results and smart suggestions.'
            />
            <FeatureItem
              icon={ChartNoAxesColumn}
              title='Rich Analytics'
              description='Contribution heatmaps, language distribution, and activity metrics at a glance.'
            />
            <FeatureItem
              icon={Code}
              title='Repository Explorer'
              description='Browse repositories with stars, forks, languages, and last activity details.'
            />
            <FeatureItem
              icon={Users}
              title='Network Insights'
              description='Explore followers, following, and organizational affiliations.'
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
