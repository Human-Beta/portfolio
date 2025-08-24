import pugImage2 from '@/assets/pug_wo_back_2.webp';

import AboutText from '@/pages/About/AboutText';

const About = () => {
  return (
    <div className='flex flex-1 items-center justify-between'>
      <AboutText />
      <img src={pugImage2} alt='Character illustration' className='z-base w-[450px]' loading='lazy' decoding='async' />
    </div>
  );
};

export default About;
