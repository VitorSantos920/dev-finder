import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import './profile-card.css';

export function ProfileCard({ profile }) {
  return (
    <article className="profile-card">
      <section className="profile-card__user-info">
        <img src={profile.avatar_url} alt="" />
        <h2>{profile.name ?? profile.login}</h2>
        <small>
          @{profile.login} | <MapPin size={12} /> {profile.location ?? 'N/A'}
        </small>
        <p>{profile.bio ?? 'No bio available.'}</p>
        <p className="profile-card__join-date">
          <Calendar size={12} />
          Joined at {new Date(profile.created_at).toLocaleDateString('en-US')}
        </p>
      </section>

      <div className="profile-card__divider"></div>

      <section className="profile-card__metrics">
        <div className="profile-card__metric">
          <strong>{profile.public_repos}</strong> <span>Public Repos</span>
        </div>
        <div className="profile-card__metric">
          <strong>{profile.followers}</strong> <span>Followers</span>
        </div>
        <div className="profile-card__metric">
          <strong>{profile.following}</strong> <span>Following</span>
        </div>

        <a href={profile.html_url} target="_blank" className="profile-card__link" rel="noreferrer">
          View on GitHub
          <ArrowRight size={15} />
        </a>
      </section>
    </article>
  );
}
