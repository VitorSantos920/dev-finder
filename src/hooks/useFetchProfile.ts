import { fetchGithubProfile } from '@/services/githubService';
import type { GithubProfile } from '@/types/github';
import { useQuery } from '@tanstack/react-query';

export function useFetchProfile(username: string | undefined) {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery<GithubProfile>({
    queryKey: ['profile', username],
    queryFn: () => fetchGithubProfile(username!),
    enabled: !!username,
  });

  return { profile, isLoading, error };
}
