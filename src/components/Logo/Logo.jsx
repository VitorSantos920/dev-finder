import { Computer } from 'lucide-react';
import './logo.css';

export function Logo() {
  return (
    <a className="logo" href="/">
      <div className="logo-container">
        <Computer size={15} />
      </div>
      <div className="logo-info">
        Dev
        <span>Finder</span>
      </div>
    </a>
  );
}
