import { ChangeEvent, SubmitEvent, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { useAutoFocus } from '@/hooks/useAutoFocus';
import { usePageTitle } from '@/hooks/usePageTitle';

export function Search() {
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

  useEffect(() => {
    document.title = 'devfinder - Discover developers through data';
  }, []);

  return (
    <main className='container'>
      <form className='hero__search' onSubmit={handleSearch}>
        <SearchInput
          ref={searchInputRef}
          iconSize={25}
          name='hero-search'
          id='hero-search'
          placeholder='Search by GitHub username...'
          value={username}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUsername(event.target.value)
          }
        />
        <button type='submit' className='hero__search-btn' disabled={!username}>
          Search
          <ArrowRight size={15} />
        </button>
      </form>
    </main>
  );
}
