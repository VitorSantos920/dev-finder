import { ChangeEvent, SubmitEvent, useState } from 'react';
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

  return (
    <main className='container'>
      <h1 className='mb-4 text-3xl font-bold'>Explore Developers</h1>
      <form
        className='group bg-background-secondary text-secondary border-primary/10 focus-within:border-highlight flex w-full cursor-pointer items-center gap-3 rounded-2xl border px-4 py-2 text-base transition-colors duration-200 ease-in-out'
        onSubmit={handleSearch}
      >
        <SearchInput
          ref={searchInputRef}
          iconSize={25}
          name='search'
          id='search'
          placeholder='Search by GitHub username...'
          value={username}
          className='text-base'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUsername(event.target.value)
          }
        />
        <button
          type='submit'
          className='group bg-highlight text-primary disabled:bg-highlight/50 disabled:text-primary/50 flex cursor-pointer items-center gap-1 rounded-[0.625rem] border-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ease-in-out disabled:cursor-not-allowed'
          disabled={!username}
        >
          Search
          <ArrowRight className='group-disabled:text-primary/50' size={15} />
        </button>
      </form>
    </main>
  );
}
