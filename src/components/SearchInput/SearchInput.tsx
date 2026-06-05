import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { forwardRef } from 'react';

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  iconSize?: number;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(
    { iconSize = 15, className, ...props }: SearchInputProps,
    ref
  ) {
    return (
      <>
        <Search
          className='group-focus-within:text-highlight duration-200 group-focus-within:rotate-90'
          size={iconSize}
        />
        <input
          className={cn(
            'text-primary h-full w-full border-0 bg-transparent pr-2 outline-0 [&::-webkit-search-cancel-button]:hidden',
            className
          )}
          ref={ref}
          {...props}
          type='search'
          aria-label='Search user'
        />
      </>
    );
  }
);
