import { Link } from 'react-router-dom';

import { GITHUB_URL, LINKEDIN_URL } from '@/config';

import { GitHubIcon, LinkedInIcon } from '@/components/icons/Icons';

const iconClass = 'h-4 w-4 md:h-5 md:w-5' as const;

function Footer() {
  return (
    <footer className='text-galactic-gray py-6'>
      <div className='flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0'>
        <p className='text-sm'>
          Developed by Mykyta Shyshov. Icons by{' '}
          <Link to='https://icons8.com' target='_blank' className='underline'>
            Icons8
          </Link>
        </p>
        <p className='text-sm'>Copyright © {new Date().getFullYear()} MS</p>
        <div className='flex items-center space-x-4'>
          <Link to={GITHUB_URL} target='_blank'>
            <GitHubIcon className={iconClass} title='GitHub' />
          </Link>
          <Link to={LINKEDIN_URL} target='_blank'>
            <LinkedInIcon className={iconClass} title='LinkedIn' />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
