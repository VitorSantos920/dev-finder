import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { GithubProfile } from '@/types/github';

type ProfileCardProps = {
  profile: GithubProfile;
};

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <article className='bg-background-secondary border-primary/10 mt-8 flex rounded-2xl border p-4'>
      <section>
        <img
          className='mb-3 h-12 w-12 rounded-full'
          src={profile.avatar_url}
          alt={`${profile.login}'s avatar`}
        />
        <h2 className='text-sm'>{profile.name ?? profile.login}</h2>
        <small className='text-primary/50 flex items-center gap-0.5 text-xs'>
          @{profile.login} | <MapPin size={12} /> {profile.location ?? 'N/A'}
        </small>
        <p className='text-primary/50 mt-3 max-w-[30ch] text-xs'>
          {profile.bio ?? 'No bio available.'}
        </p>
        <p className='text-primary/50 mt-3 flex max-w-[30ch] items-center gap-0.5 text-xs'>
          <Calendar className='mr-1 align-middle' size={12} />
          Joined at {new Date(profile.created_at).toLocaleDateString('en-US')}
        </p>
      </section>

      <div className='bg-primary/10 mx-4 h-auto w-px'></div>

      <section>
        <div>
          <strong>{profile.public_repos}</strong> <span>Public Repos</span>
        </div>
        <div>
          <strong>{profile.followers}</strong> <span>Followers</span>
        </div>
        <div>
          <strong>{profile.following}</strong> <span>Following</span>
        </div>

        <a
          href={profile.html_url}
          target='_blank'
          className='group bg-highlight/10 text-highlight border-highlight/50 hover:bg-highlight hover:text-primary mt-3 inline-flex items-center gap-1 rounded-[0.625rem] border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ease-in-out'
          rel='noreferrer'
        >
          View on GitHub
          <ArrowRight
            className='group-hover:text-primary transition-all duration-200 ease-in-out group-hover:translate-x-1.5'
            size={15}
          />
        </a>
      </section>
    </article>
  );
}
