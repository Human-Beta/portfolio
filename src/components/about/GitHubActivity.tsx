import GitHubCalendar from 'react-github-calendar';

import { GITHUB_USERNAME } from '@/config';

const GitHubActivity = () => {
  const goldScale = ['#1a1a1a', '#5b4f1a', '#8a6f1d', '#b9941f', '#f0c43c'];
  const calendarTheme = {
    light: goldScale,
    dark: goldScale,
  };

  return (
    <div className='flex flex-col gap-5 text-lunar-gray'>
      <h2 className='text-center text-2xl font-semibold md:text-3xl'>
        My <span className='text-stellar-gold'>Activity</span>
      </h2>
      <div className='self-center'>
        <GitHubCalendar username={GITHUB_USERNAME} theme={calendarTheme} blockSize={15} blockMargin={5} fontSize={16} />
      </div>
    </div>
  );
};

export default GitHubActivity;
