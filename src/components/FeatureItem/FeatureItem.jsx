import './featureitem.css';

export function FeatureItem({ icon: Icon, title, description }) {
  return (
    <article className="features__item">
      <div className="features__item-icon">
        <Icon size={18} />
      </div>
      <h3 className="features__item-title">{title}</h3>
      <p className="features__item-description">{description}</p>
    </article>
  );
}
