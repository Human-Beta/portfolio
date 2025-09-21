import type IconProps from '@/assets/IconProps';

const VercelIcon = ({ className, title = 'Vercel' }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 76 65'
      width='100'
      height='100'
      className={className}
      fill='currentColor'
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d='m37.5274 0 36.1574 63H1.3701z' />
    </svg>
  );
};

export default VercelIcon;
