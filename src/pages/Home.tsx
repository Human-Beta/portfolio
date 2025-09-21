import { Typewriter } from 'react-simple-typewriter';

import PubWoBack from '@/assets/PubWoBack.tsx';

const Home = () => {
  return (
    <div className='flex-1 flex flex-col items-center justify-around gap-10 sm:justify-between md:gap-0 md:flex-row md:px-10 lg:px-15 xl:px-25'>
      <div className='flex flex-col items-center gap-5 text-lunar-gray md:items-start md:p-4 md:gap-13'>
        <div className='flex flex-row justify-center flex-wrap gap-4 md:flex-col'>
          <h1 className='text-3xl'>
            Hi There!
            <span className='inline-block origin-[70%_70%] animate-wave' role='img' aria-labelledby='wave'>
              👋🏻
            </span>
          </h1>
          <h1 className='text-4xl text-center md:text-left'>
            I'm <strong className='text-stellar-gold'>Mykyta Shyshov</strong>
          </h1>
        </div>
        <h1 className='text-3xl text-center sm:text-4xl md:text-left'>
          <Typewriter
            words={['Software Developer', 'Full Stack', 'Freelancer']}
            loop
            cursor
            typeSpeed={100}
            delaySpeed={3000}
          />
        </h1>
      </div>
      <PubWoBack className='z-base w-[60%] max-w-100 md:w-[35%] xl:w-1/2' />
    </div>
  );
};

export default Home;
