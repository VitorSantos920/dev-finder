import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useForm } from 'react-hook-form';
import { type SearchFormData, searchSchema } from '@/schemas/searchSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export function Search() {
  const navigate = useNavigate();
  usePageTitle('devfinder - Discover developers through data');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
  });

  function onSubmit(data: SearchFormData) {
    navigate(`/user/${data.username}`);
  }

  return (
    <main className='container'>
      <h1 className='mb-4 text-3xl font-bold'>Explore Developers</h1>
      <form
        className='group bg-background-secondary text-secondary border-primary/10 focus-within:border-highlight flex w-full cursor-pointer items-center gap-3 rounded-2xl border px-4 py-2 text-base transition-colors duration-200 ease-in-out'
        onSubmit={handleSubmit(onSubmit)}
      >
        <SearchInput
          {...register('username')}
          autoFocus
          iconSize={25}
          id='search'
          placeholder='Search by GitHub username...'
          className='text-base'
          autoComplete='username'
        />
        <button
          type='submit'
          className='group bg-highlight text-primary disabled:bg-highlight/50 disabled:text-primary/50 flex cursor-pointer items-center gap-1 rounded-[0.625rem] border-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ease-in-out disabled:cursor-not-allowed'
        >
          Search
          <ArrowRight className='group-disabled:text-primary/50' size={15} />
        </button>
      </form>
      {errors.username && (
        <p
          aria-invalid
          role='alert'
          aria-describedby='search'
          className='mt-2 text-sm text-red-500'
        >
          {errors.username.message}
        </p>
      )}
    </main>
  );
}
