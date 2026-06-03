import { Computer } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link className='flex items-center gap-3' to='/'>
      <div className='bg-highlight flex h-7 w-7 items-center justify-center rounded-lg p-1'>
        <Computer size={15} />
      </div>
      <div className='font-bold'>
        Dev
        <span className='text-highlight'>Finder</span>
      </div>
    </Link>
  );
}
