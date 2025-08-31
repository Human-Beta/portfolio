import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { GITHUB_URL } from '@/config';
import useWindowEvent from '@/hooks/useWindowEvent';

import {
  CloseIcon,
  GitHubIcon,
  HomeIcon,
  MenuIcon,
  ProjectsIcon,
  ResumeIcon,
  UserIcon,
} from '@/components/icons/Icons';

interface Props {
  className?: string;
}

const headerBlurredClass = 'backdrop-blur-xl bg-[#26263085] shadow-lg shadow-black/20';
const iconClass = 'h-4 w-4 md:h-5 md:w-5';
const getNavLinkClass = ({ isActive }: { isActive: boolean }) => `nav-link ${isActive ? 'nav-link-active' : ''}`;
const getNavLinkAdaptiveClass = ({ isActive }: { isActive: boolean }) =>
  `flex-col lg:flex-row ${getNavLinkClass({ isActive })}`;

function Header({ className }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useWindowEvent('scroll', () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  });

  const openMobileMenu = () => setIsMobileMenuOpen(true);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-nav p-4 font-family-heading transition-all-d-300 ease-in-out ${isScrolled ? headerBlurredClass : ''}`}
    >
      <div className={`${className} flex justify-between items-center`}>
        <Link to='/' className='text-4xl text-stellar-gold font-bold'>
          Ms.
        </Link>

        <div className='hidden md:flex items-center gap-12 text-lg'>
          <NavLink to='/' className={getNavLinkAdaptiveClass}>
            <HomeIcon className={iconClass} title='Home' />
            Home
          </NavLink>
          <NavLink to='/about' className={getNavLinkAdaptiveClass}>
            <UserIcon className={iconClass} title='About' />
            About
          </NavLink>
          <NavLink to='/resume' className={getNavLinkAdaptiveClass}>
            <ResumeIcon className={iconClass} title='Resume' />
            Resume
          </NavLink>
          <NavLink to='/projects' className={getNavLinkAdaptiveClass}>
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

        <button
          onClick={openMobileMenu}
          className='md:hidden cursor-pointer text-stellar-gold hover:text-nebula-pink transition-colors-d-300 p-2'
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen || <MenuIcon className={iconClass} title='Open menu' />}
        </button>

        <div
          className={`md:hidden fixed inset-0 z-overlay transition-opacity-d-100 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={closeMobileMenu} />
          <div
            className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] ${headerBlurredClass} p-6 transform transition-transform-d-200 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className='flex justify-end mb-3'>
              <button
                onClick={closeMobileMenu}
                className='cursor-pointer text-stellar-gold hover:text-nebula-pink transition-colors-d-300 p-2'
                aria-label='Close menu'
              >
                <CloseIcon className={iconClass} title='Close menu' />
              </button>
            </div>

            <nav className='flex flex-col space-y-6 text-lg'>
              <NavLink to='/' className={getNavLinkClass} onClick={closeMobileMenu}>
                <HomeIcon className={iconClass} title='Home' />
                Home
              </NavLink>
              <NavLink to='/about' className={getNavLinkClass} onClick={closeMobileMenu}>
                <UserIcon className={iconClass} title='About' />
                About
              </NavLink>
              <NavLink to='/resume' className={getNavLinkClass} onClick={closeMobileMenu}>
                <ResumeIcon className={iconClass} title='Resume' />
                Resume
              </NavLink>
              <NavLink to='/projects' className={getNavLinkClass} onClick={closeMobileMenu}>
                <ProjectsIcon className={iconClass} title='Projects' />
                Projects
              </NavLink>
              <Link
                to={GITHUB_URL}
                className='flex items-center gap-3 text-galactic-gray hover:text-nebula-pink hover:scale-105 duration-300'
                target='_blank'
                onClick={closeMobileMenu}
              >
                <GitHubIcon className={iconClass} title='GitHub' />
                GitHub
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
