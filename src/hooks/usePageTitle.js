import { useEffect } from 'react';

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title || 'devfinder - Discover developers through data'
  }, [title]);
}