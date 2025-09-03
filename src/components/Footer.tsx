import { GITHUB_URL, LINKEDIN_URL } from '@/config';

import ExternalLink from '@/components/ExternalLink';
import { GitHubIcon, LinkedInIcon } from '@/components/icons/Icons';

const iconClass = 'h-4 w-4 md:h-5 md:w-5' as const;

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className='text-galactic-gray py-6'>
      <div className='flex flex-col md:flex-row items-center space-y-1 md:space-y-0 px-30'>
        <p className='flex-1 text-sm'>
          Developed by me. Icons by{' '}
          <ExternalLink to='https://icons8.com' className='underline'>
            Icons8
          </ExternalLink>
        </p>
        <p className='flex-1 text-center text-sm'>Copyright © {year} MS</p>
        <div className='flex-1 flex items-center justify-end space-x-4'>
          <ExternalLink to={GITHUB_URL}>
            <GitHubIcon className={iconClass} title='GitHub' />
          </ExternalLink>
          <ExternalLink to={LINKEDIN_URL}>
            <LinkedInIcon className={iconClass} title='LinkedIn' />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
