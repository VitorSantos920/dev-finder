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
        <section className='flex min-h-[calc(100dvh-5.25rem)] flex-col items-center justify-center pb-24'>
          <span className='text-highlight border-highlight/50 bg-highlight/15 mb-4 flex items-center gap-[0.35rem] rounded-full border px-3 py-1.5 text-xs'>
            <Zap size={14} />
            Powered by GitHub API
          </span>
          <h1 className='mb-4 text-center text-[4rem] font-bold'>
            Discover developers <br />
            <span className='text-highlight'>through data.</span>
          </h1>
          <p className='text-primary/50 mb-8 max-w-[40ch] text-center text-xl leading-relaxed'>
            Search GitHub profiles, explore repositories, analyze contribution
            patterns, and understand any developer at a glance.
          </p>

          <form
            className='group bg-background-secondary text-secondary border-primary/10 focus-within:border-highlight flex w-full cursor-pointer items-center gap-3 rounded-2xl border px-4 py-2 text-base transition-colors duration-200 ease-in-out md:w-3xl'
            onSubmit={handleSearch}
          >
            <SearchInput
              ref={searchInputRef}
              iconSize={25}
              name='hero-search'
              id='hero-search'
              placeholder='Search by GitHub username...'
              value={username}
              className='text-base'
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setUsername(event.target.value)
              }
            />
            <button
              type='submit'
              className='group bg-highlight text-primary disabled:bg-highlight/50 disabled:text-primary/50 flex cursor-pointer items-center gap-1 rounded-[0.625rem] border-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ease-in-out disabled:cursor-not-allowed'
              disabled={!username}
            >
              Search
              <ArrowRight
                className='group-disabled:text-primary/50'
                size={15}
              />
            </button>
          </form>
        </section>

        <section className='pb-24 text-center'>
          <header className='mb-8'>
            <p className='eyebrow text-primary/50 mb-3 text-xs font-semibold uppercase'>
              PLATFORM PREVIEW
            </p>
            <h2 className='mb-4 text-center text-[2.5rem] leading-relaxed font-bold'>
              Everything you need to know
              <br />
              <span className='text-primary/50 font-normal'>
                about any developer.
              </span>
            </h2>
          </header>

          <img src='/profile-mockup.webp' />
        </section>

        <section className='pb-24 text-center'>
          <header className='mb-8'>
            <p className='eyebrow text-primary/50 mb-3 text-xs font-semibold uppercase'>
              Features
            </p>
            <h2 className='text-[2rem]'>Built for developer exploration</h2>
          </header>

          <div className='grid gap-4 text-left md:grid-cols-2'>
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
