import { Typewriter } from 'react-simple-typewriter';

import pugImage from '@/assets/pug_wo_back.webp';

const Home = () => {
  return (
    <div className='flex-col md:flex-row flex flex-1 items-center justify-between md:px-12 lg:px-15 xl:px-25'>
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
          {/*Software Developer*/}
          <Typewriter
            words={['Software Developer', 'Full Stack', 'Freelancer']}
            loop
            cursor
            typeSpeed={100}
            delaySpeed={3000}
          />
        </h1>
      </div>
      <img
        src={pugImage}
        alt='Character illustration'
        className='z-base w-[60%] md:w-[40%] lg:max-w-100 xl:w-1/2'
        loading='lazy'
        decoding='async'
      />
    </div>
  );
};

export default Home;
