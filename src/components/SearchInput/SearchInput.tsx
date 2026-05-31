import { Search } from 'lucide-react';
import { forwardRef } from 'react';

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  iconSize?: number;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { iconSize = 15, ...props }: SearchInputProps,
  ref,
) {
  return (
    <>
      <Search size={iconSize} />
      <input ref={ref} {...props} type="search" aria-label="Search user" />
    </>
  );
});
