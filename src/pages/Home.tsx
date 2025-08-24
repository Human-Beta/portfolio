import { Typewriter } from 'react-simple-typewriter';

import pugImage from '@/assets/pug_wo_back.webp';

const Home = () => {
  return (
    <div className='flex flex-1 items-center justify-between px-25'>
      <div className='flex flex-col gap-13 p-4 text-lunar-gray'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl'>
            Hi There!
            <span className='inline-block origin-[70%_70%] animate-wave' role='img' aria-labelledby='wave'>
              👋🏻
            </span>
          </h1>
          <h1 className='text-4xl'>
            I'm <strong className='text-stellar-gold'>Mykyta Shyshov</strong>
          </h1>
        </div>
        <h1 className='text-4xl'>
          <Typewriter
            words={['Software Developer', 'Fullstack', 'Freelancer']}
            loop
            cursor
            typeSpeed={100}
            delaySpeed={3000}
          />
        </h1>
      </div>
      <img src={pugImage} alt='Character illustration' className='z-base w-[400px]' loading='lazy' decoding='async' />
    </div>
  );
};

export default Home;
