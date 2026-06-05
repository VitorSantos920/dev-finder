import { memo } from 'react';
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
    <article className='border-primary/10 hover:border-highlight/40 hover:shadow-highlight bg-background-secondary rounded-2xl border p-6 transition-colors duration-200 ease-in-out'>
      <div className='text-highlight bg-highlight/15 mb-4 flex h-9 w-9 items-center justify-center rounded-xl'>
        <Icon size={18} />
      </div>
      <h3 className='mb-1.5 text-xl font-semibold'>{title}</h3>
      <p className='text-primary/50 text-sm leading-relaxed'>{description}</p>
    </article>
  );
});
