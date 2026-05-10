import { Search } from 'lucide-react';

export function SearchInput({ iconSize = 15, ...props }) {
  return (
    <>
      <Search size={iconSize} />
      <input {...props} type="search" aria-label="Search user" />
    </>
  );
}
