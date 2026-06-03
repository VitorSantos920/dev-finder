import { memo } from 'react';
import './featureitem.css';
import { type LucideIcon } from 'lucide-react';

type FeatureItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FeatureItem = memo(function FeatureItem({
  icon: Icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <article className='features__item'>
      <div className='features__item-icon'>
        <Icon size={18} />
      </div>
      <h3 className='features__item-title'>{title}</h3>
      <p className='features__item-description'>{description}</p>
    </article>
  );
});
