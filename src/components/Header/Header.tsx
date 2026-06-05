import { Moon } from 'lucide-react';
import { MenuItem } from '@/components/MenuItem/MenuItem';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { Logo } from '@/components/Logo/Logo';

export function Header() {
  return (
    <header className='border-b-secondary/10 fixed top-0 left-0 w-full border-b p-3 backdrop-blur-xs'>
      <div className='mx-auto grid max-w-340 grid-cols-3 justify-between'>
        <Logo />

        <nav className='flex items-center justify-center gap-1 text-sm'>
          <MenuItem link='/' content='Home' />
          <MenuItem link='/search' content='Explore' />
        </nav>

        <div className='flex justify-end gap-6 text-sm'>
          <label className='group text-secondary border-secondary/7 focus-within:border-highlight bg-background-secondary flex w-35.5 cursor-pointer items-center gap-1.5 rounded-lg border border-solid px-4 py-2 text-xs transition-all duration-200 ease-in-out focus-within:w-50'>
            <SearchInput
              name='header-search'
              id='header-search'
              placeholder='Search...'
              className='w-full border-0 bg-transparent pr-2 text-xs outline-0 [&::-webkit-search-cancel-button]:hidden'
            />
          </label>

          <button
            className='text-secondary hover:text-primary hover:bg-secondary/7 cursor-pointer rounded-lg border-0 bg-transparent p-2 text-xs transition-colors duration-200 ease-in-out'
            type='button'
            aria-pressed='false'
            aria-label='Turn on light mode'
          >
            <Moon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
