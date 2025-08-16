import { Link } from 'react-router-dom';

import { GITHUB_URL } from '@/config';

import { GitHubIcon, HomeIcon, ProjectsIcon, ResumeIcon, UserIcon } from '@/components/icons/Icons';

const iconClass = 'h-4 w-4 md:h-5 md:w-5' as const;

function Header() {
  return (
    <>
      <nav className='sticky top-0 z-nav p-4 flex justify-between items-center'>
        <Link to='/' className='text-4xl text-stellar-gold font-bold'>
          Sm.
        </Link>
        <div className='flex items-center gap-12 text-lg'>
          <Link to='/' className='nav-link'>
            <HomeIcon className={iconClass} title='Home' />
            Home
          </Link>
          <Link to='/about' className='nav-link'>
            <UserIcon className={iconClass} title='About' />
            About
          </Link>
          <Link to='/resume' className='nav-link'>
            <ResumeIcon className={iconClass} title='Resume' />
            Resume
          </Link>
          <Link to='/projects' className='nav-link'>
            <ProjectsIcon className={iconClass} title='Projects' />
            Projects
          </Link>
          <Link
            to={GITHUB_URL}
            className='text-galactic-gray hover:text-nebula-pink hover:scale-115 duration-300'
            target='_blank'
          >
            <GitHubIcon className={iconClass} title='GitHub' />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
