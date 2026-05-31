import { Computer } from 'lucide-react';
import './logo.css';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link className="logo" to="/">
      <div className="logo-container">
        <Computer size={15} />
      </div>
      <div className="logo-info">
        Dev
        <span>Finder</span>
      </div>
    </Link>
  );
}
