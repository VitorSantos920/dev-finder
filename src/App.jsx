import { Header } from '@/components/Header/Header';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import {
  ArrowRight,
  Calendar,
  ChartNoAxesColumn,
  Code,
  MapPin,
  Search,
  Users,
  Zap,
} from 'lucide-react';
import { Logo } from '@/components/Logo/Logo';
import { useState } from 'react';
import { FeatureItem } from './components/FeatureItem/FeatureItem';

const API_BASE = 'https://api.github.com/users';

export function App() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(event) {
    event.preventDefault();

    const trimmed = username.toLowerCase().trim();

    if (!trimmed) return;

    setIsLoading(true);
    setProfile(null);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/${trimmed}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`User "${trimmed}" not found`);
        }

        throw new Error('An error occurred when retrieving data. Try again later!');
      }

      const data = await response.json();
      setProfile(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
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

          <form className="hero__search" onSubmit={handleSearch}>
            <SearchInput
              iconSize={25}
              name="hero-search"
              id="hero-search"
              placeholder="Search by GitHub username..."
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <button type="submit" className="hero__search-btn" disabled={!username}>
              Search
              <ArrowRight size={15} />
            </button>
          </form>

          {isLoading && <p>Carregando dados...</p>}

          {error && <p>{error}!</p>}

          {profile && (
            <article className="hero__profile">
              <section className="hero__profile-user-info">
                <img src={profile.avatar_url} />
                <h2>{profile.name}</h2>
                <small>
                  @{profile.login} | <MapPin size={12} /> {profile.location ?? 'N/A'}
                </small>
                <p>{profile.bio ?? 'No bio available.'}</p>
                <p className="hero__profile-join-date">
                  <Calendar size={12} />
                  Joined at {new Date(profile.created_at).toLocaleDateString('en-US')}
                </p>
              </section>

              <div className="divider"></div>

              <section className="hero__profile-metrics">
                <div className="hero__profile-metric">
                  <strong>{profile.public_repos}</strong> <span>Public Repos</span>
                </div>
                <div className="hero__profile-metric">
                  <strong>{profile.followers}</strong> <span>Followers</span>
                </div>
                <div className="hero__profile-metric">
                  <strong>{profile.following}</strong> <span>Following</span>
                </div>

                <a href={profile.html_url} target="_blank" className="hero__profile-link">
                  View on GitHub
                  <ArrowRight size={15} />
                </a>
              </section>
            </article>
          )}
        </section>

        <section className="platform-preview">
          <header>
            <p className="eyebrow">PLATFORM PREVIEW</p>
            <h2 className="platform-preview__title">
              Everything you need to know
              <br />
              <span>about any developer.</span>
            </h2>
          </header>

          <img src="/profile-mockup.webp" className="platform-preview__exhibition" />
        </section>

        <section className="features">
          <header>
            <p className="eyebrow">Features</p>
            <h2 className="features__title">Built for developer exploration</h2>
          </header>

          <div className="features__items">
            <FeatureItem
              icon={Search}
              title="Intelligent Search"
              description="Find any developer on GitHub instantly with real-time results and smart suggestions."
            />
            <FeatureItem
              icon={ChartNoAxesColumn}
              title="Rich Analytics"
              description="Contribution heatmaps, language distribution, and activity metrics at a glance."
            />
            <FeatureItem
              icon={Code}
              title="Repository Explorer"
              description="Browse repositories with stars, forks, languages, and last activity details."
            />
            <FeatureItem
              icon={Users}
              title="Network Insights"
              description="Explore followers, following, and organizational affiliations."
            />
          </div>
        </section>
      </main>
      <footer>
        <Logo />

        <p>Built with the GitHub API · Not affiliated with GitHub, Inc.</p>
      </footer>
    </>
  );
}
