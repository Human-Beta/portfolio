import type { ComponentType } from 'react';

import ExternalLink from '@/components/ExternalLink.tsx';

interface IconLinkProps {
  to: string;
  icon: ComponentType<{ className?: string }>;
  className?: string;
}

const baseClasses =
  'border rounded-lg border-stellar-gold/80 px-9 py-3 hover:scale-105 transition-transform-d-300 xl:px-15 xl:py-5';

const IconLink = ({ to, icon: Icon, className }: IconLinkProps) => {
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <ExternalLink to={to} className={combinedClasses}>
      <Icon className='size-18 xl:size-25' />
    </ExternalLink>
  );
};

export default IconLink;
