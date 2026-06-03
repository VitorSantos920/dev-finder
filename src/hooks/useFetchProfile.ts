import { GithubProfile } from '@/types/github';
import { useEffect, useState } from 'react';

const API_BASE = 'https://api.github.com/users';

export function useFetchProfile(username: string | undefined) {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    async function fetchProfile() {
      setIsLoading(true);
      setError(null);
      setProfile(null);

      try {
        const response = await fetch(`${API_BASE}/${username}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`User "${username}" not found`);
          }

          throw new Error(
            'An error occurred when retrieving data. Try again later!'
          );
        }

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, [username]);

  return { profile, isLoading, error };
}
