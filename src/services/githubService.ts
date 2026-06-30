import type { GithubProfile } from '@/types/github';

const API_BASE = `https://api.github.com/users`;

export async function fetchGithubProfile(
  username: string
): Promise<GithubProfile> {
  const response = await fetch(`${API_BASE}/${username}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`User "${username}" not found`);
    }

    throw new Error('An error occurred when retrieving data. Try again later!');
  }

  return response.json();
}
