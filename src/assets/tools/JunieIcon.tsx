interface Props {
  className?: string;
}

const JunieIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      className={className}
      viewBox='0 0 69 69'
      aria-labelledby='junie'
    >
      <path
        d='M46.0724 23.0702H68.9861V26.8861C68.9861 53.5886 57.5291 68.8525 26.9868 68.8525H23.168V45.9566H26.9868C40.3532 45.9566 46.0817 40.2327 46.0817 26.8768V23.0608L46.0724 23.0702Z'
        fill='currentColor'
      />
      <path d='M22.9997 23.0718H0.0859375V45.9677H22.9997V23.0718Z' fill='currentColor' />
      <path d='M45.9128 0.185181H22.999V23.081H45.9128V0.185181Z' fill='currentColor' />
    </svg>
  );
};

export default JunieIcon;
