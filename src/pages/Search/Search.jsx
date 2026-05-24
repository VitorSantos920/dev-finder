import { useEffect, useRef, useState } from 'react';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Search() {
  const [username, setUsername] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const trimmed = username.trim();
    if (!trimmed) return;
    navigate(`/user/${trimmed}`);
  }

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  return (
    <form className="hero__search" onSubmit={handleSearch}>
      <SearchInput
        ref={searchInputRef}
        iconSize={25}
        name="hero-search"
        id="hero-search"
        placeholder="Search by GitHub username..."
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button type="submit" className="hero__search-btn" disabled={!username}>
        Search
        <ArrowRight size={15} />
      </button>
    </form>
  );
}
