import { Link, NavLink } from 'react-router-dom';

import { GITHUB_URL } from '@/config';

import { GitHubIcon, HomeIcon, ProjectsIcon, ResumeIcon, UserIcon } from '@/components/icons/Icons';

const iconClass = 'h-4 w-4 md:h-5 md:w-5';

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => `nav-link ${isActive ? 'nav-link-active' : ''}`;

function Header() {
  return (
    <header className='sticky top-0 z-nav p-4 flex justify-between items-center font-family-heading'>
      <Link to='/' className='text-4xl text-stellar-gold font-bold'>
        Ms.
      </Link>
      <div className='flex items-center gap-12 text-lg'>
        <NavLink to='/' className={getNavLinkClass}>
          <HomeIcon className={iconClass} title='Home' />
          Home
        </NavLink>
        <NavLink to='/about' className={getNavLinkClass}>
          <UserIcon className={iconClass} title='About' />
          About
        </NavLink>
        <NavLink to='/resume' className={getNavLinkClass}>
          <ResumeIcon className={iconClass} title='Resume' />
          Resume
        </NavLink>
        <NavLink to='/projects' className={getNavLinkClass}>
          <ProjectsIcon className={iconClass} title='Projects' />
          Projects
        </NavLink>
        <Link
          to={GITHUB_URL}
          className='text-galactic-gray hover:text-nebula-pink hover:scale-115 duration-300'
          target='_blank'
        >
          <GitHubIcon className={iconClass} title='GitHub' />
        </Link>
      </div>
    </header>
  );
}

export default Header;
