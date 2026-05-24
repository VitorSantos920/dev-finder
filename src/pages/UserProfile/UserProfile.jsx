import { useParams } from 'react-router-dom';
import { ProfileCard } from '../../components/ProfileCard/ProfileCard';
import { useEffect, useState } from 'react';

const API_BASE = 'https://api.github.com/users';

export function UserProfile() {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_BASE}/${username}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`User "${username}" not found`);
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

    fetchProfile();
  }, [username]);

  useEffect(() => {
    if (profile) {
      document.title = `${profile.name ?? profile.login} (@${profile.login}) | devfinder`;
    } else {
      document.title = 'devfinder - Discover developers through data';
    }
  }, [profile]);

  return (
    <main>
      {isLoading && <p>Carregando dados...</p>}

      {error && <p>{error}!</p>}

      {profile && <ProfileCard profile={profile} />}
    </main>
  );
}
