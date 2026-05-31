import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer/Footer';
import { useEffect } from 'react';

export function NotFound() {
  useEffect(() => {
    document.title = 'devfinder - Discover developers through data';
  }, []);

  return (
    <>
      <main className="container">
        <h1>404</h1>
        <p>This page doesn't exist.</p>
        <Link to="/">Go back home</Link>
      </main>
      <Footer />
    </>
  );
}
