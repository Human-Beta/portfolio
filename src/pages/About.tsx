import PubWoBack2 from '@/assets/PubWoBack2';

import AboutText from '@/components/about/AboutText';
import SkillSet from '@/components/about/SkillSet';
import Tools from '@/components/about/Tools';

const About = () => {
  return (
    <div className='flex flex-col gap-10 xl:gap-20'>
      <div className='flex flex-col items-center justify-between gap-10 md:flex-row md:items-start md:gap-5 xl:gap-10 2xl:gap-20'>
        <AboutText />
        <PubWoBack2 className='z-base max-w-100 md:shrink-[1.2] lg:shrink-[1.1]' />
      </div>
      <SkillSet />
      <Tools />
    </div>
  );
};

export default About;
