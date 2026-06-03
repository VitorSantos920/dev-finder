import { Logo } from '@/components/Logo/Logo';

export function Footer() {
  return (
    <footer className='mx-auto mt-8 flex max-w-300 justify-between px-4 py-12'>
      <Logo />

      <p className='text-primary/50 text-sm'>
        Built with the GitHub API · Not affiliated with GitHub, Inc.
      </p>
    </footer>
  );
}
