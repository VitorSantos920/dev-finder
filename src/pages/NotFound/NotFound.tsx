import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer/Footer';
import { ArrowLeft } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

export function NotFound() {
  usePageTitle('404 | devfinder');

  return (
    <>
      <main className='mx-auto my-21 max-w-300'>
        <h1 className='mb-3 text-3xl font-bold'>
          <span className='text-highlight'>| 404</span>
          <br />
          This page doesn't exist.
        </h1>
        <Link
          className='group bg-highlight text-primary flex w-fit items-center gap-2 rounded-[0.625rem] px-5 py-2.5 transition-colors duration-200 ease-in-out'
          to='/'
        >
          <ArrowLeft className='transition-transform duration-200 ease-in-out group-hover:-translate-x-1' />
          Go back home
        </Link>
      </main>
      <Footer />
    </>
  );
}
