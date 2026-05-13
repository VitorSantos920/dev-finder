import { Search } from 'lucide-react';
import { forwardRef } from 'react';

export const SearchInput = forwardRef(function SearchInput({ iconSize = 15, ...props }, ref) {
  return (
    <>
      <Search size={iconSize} />
      <input ref={ref} {...props} type="search" aria-label="Search user" />
    </>
  );
});
