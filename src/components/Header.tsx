import { Link } from 'react-router-dom';

import { GITHUB_URL } from '@/config';

import { GitHubIcon, HomeIcon, ProjectsIcon, ResumeIcon, UserIcon } from '@/components/icons/Icons';

const linkClass = 'flex items-center gap-2 text-galactic-gray hover:text-nebula-pink' as const;
const iconClass = 'h-4 w-4 md:h-5 md:w-5' as const;

function Header() {
  return (
    <>
      <nav className='sticky top-0 z-nav p-4 flex justify-between items-center'>
        <Link to='/' className='text-4xl text-stellar-gold font-bold'>
          Sm.
        </Link>
        <div className='flex items-center gap-12 text-lg'>
          <Link to='/' className={linkClass}>
            <HomeIcon className={iconClass} title='Home' />
            Home
          </Link>
          <Link to='/about' className={linkClass}>
            <UserIcon className={iconClass} title='About' />
            About
          </Link>
          <Link to='/resume' className={linkClass}>
            <ResumeIcon className={iconClass} title='Resume' />
            Resume
          </Link>
          <Link to='/projects' className={linkClass}>
            <ProjectsIcon className={iconClass} title='Projects' />
            Projects
          </Link>
          <Link to={GITHUB_URL} className='text-galactic-gray' target='_blank'>
            <GitHubIcon className={iconClass} title='GitHub' />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
