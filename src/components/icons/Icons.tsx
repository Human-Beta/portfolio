export type IconProps = {
  className?: string;
  title?: string;
};

export function HomeIcon({ className, title }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d='M3 10.5 12 3l9 7.5' />
      <path d='M5 10.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9.5' />
      <path d='M9 21v-6a3 3 0 0 1 6 0v6' />
    </svg>
  );
}

export function UserIcon({ className, title }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d='M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z' />
      <path d='M3 21a8.5 8.5 0 0 1 18 0' />
    </svg>
  );
}

export function ResumeIcon({ className, title }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d='M7 3h6l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z' />
      <path d='M13 3v4h4' />
      <path d='M8.5 12h7' />
      <path d='M8.5 16h7' />
      <path d='M9 8h3' />
    </svg>
  );
}

export function ProjectsIcon({ className, title }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d='M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z' />
      <path d='M7 12h10' />
      <path d='M7 16h6' />
    </svg>
  );
}

export function GitHubIcon({ className, title }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d='M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56 0-.28 0-1.02-.02-2-3.22.7-3.9-1.55-3.9-1.55-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.57-2.57-.29-5.28-1.29-5.28-5.75 0-1.27.46-2.31 1.22-3.12-.12-.3-.53-1.52.12-3.17 0 0 .99-.32 3.24 1.19a11.2 11.2 0 0 1 5.9 0c2.25-1.51 3.24-1.19 3.24-1.19.65 1.65.24 2.87.12 3.17.76.81 1.22 1.85 1.22 3.12 0 4.47-2.72 5.46-5.31 5.75.42.36.79 1.06.79 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z' />
    </svg>
  );
}

export function LinkedInIcon({ className, title }: IconProps) {
  const offset = 3;
  const minX = offset;
  const minY = offset;
  const width = 30 - 2 * offset;
  const height = 30 - 2 * offset;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      // viewBox='0 0 30 30'
      viewBox={`${minX} ${minY} ${width} ${height}`}
      fill='currentColor'
      className={className}
      aria-hidden={title ? undefined : true}
    >
      <path d='M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z' />
    </svg>
  );
}

export const headerIcons = {
  Home: HomeIcon,
  About: UserIcon,
  Resume: ResumeIcon,
  Projects: ProjectsIcon,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
} as const;
