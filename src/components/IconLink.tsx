import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IconLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const baseClasses = 'border rounded-lg border-stellar-gold/80 px-15 py-5 hover:scale-105 transition-transform-d-300';

const IconLink = ({ to, children, className = '' }: IconLinkProps) => {
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <Link to={to} target='_blank' className={combinedClasses}>
      {children}
    </Link>
  );
};

export default IconLink;
