import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ProfileCard } from '@/components/ProfileCard/ProfileCard';
import { Footer } from '@/components/Footer/Footer';
import { useFetchProfile } from '@/hooks/useFetchProfile';
import { usePageTitle } from '@/hooks/usePageTitle';

export function UserProfile() {
  const { username } = useParams();
  const { profile, isLoading, error } = useFetchProfile(username);
  const navigate = useNavigate();

  usePageTitle(
    profile
      ? `${profile.name ?? profile.login} (@${profile.login}) | devfinder`
      : 'devfinder - Discover developers through data'
  );

  return (
    <>
      <main className='container'>
        <button
          className='bg-background-secondary text-secondary hover:text-primary flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors duration-200'
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={14} />
          Back
        </button>

        {isLoading && <p>Carregando dados...</p>}
        {error && <p>{error.message}!</p>}
        {profile && <ProfileCard profile={profile} />}
      </main>
      <Footer />
    </>
  );
}
