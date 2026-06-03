export type GithubProfile = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
};
