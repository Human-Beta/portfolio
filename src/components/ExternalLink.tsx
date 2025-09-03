import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ExternalLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ExternalLink = ({ to, children, className, onClick }: ExternalLinkProps) => (
  <Link to={to} className={className} target='_blank' onClick={onClick} rel='noopener noreferrer'>
    {children}
  </Link>
);

export default ExternalLink;
