import type { ReactNode } from 'react';

import ExternalLink from '@/components/ExternalLink';

interface IconLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const baseClasses = 'border rounded-lg border-stellar-gold/80 px-15 py-5 hover:scale-105 transition-transform-d-300';

const IconLink = ({ to, children, className }: IconLinkProps) => {
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <ExternalLink to={to} className={combinedClasses}>
      {children}
    </ExternalLink>
  );
};

export default IconLink;
