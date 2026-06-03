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
        <button onClick={() => navigate(-1)}>
          <ArrowLeft />
          Back
        </button>

        {isLoading && <p>Carregando dados...</p>}
        {error && <p>{error}!</p>}
        {profile && <ProfileCard profile={profile} />}
      </main>
      <Footer />
    </>
  );
}
