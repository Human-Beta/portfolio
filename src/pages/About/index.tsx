import pugImage2 from '@/assets/pug_wo_back_2.webp';

import AboutText from '@/pages/About/AboutText';
import SkillSet from '@/pages/About/SkillSet';

const About = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex items-center justify-between gap-20'>
        <AboutText />
        <img
          src={pugImage2}
          alt='Character illustration'
          className='z-base w-[400px]'
          loading='lazy'
          decoding='async'
        />
      </div>
      <SkillSet />
    </div>
  );
};

export default About;
