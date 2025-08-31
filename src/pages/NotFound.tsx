import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-1 items-center justify-center px-25'>
      <div className='flex flex-col items-center gap-8 p-4 text-center text-lunar-gray'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-6xl font-bold text-stellar-gold'>404</h1>
          <h2 className='text-4xl'>Oops! Page Not Found</h2>
          <p className='text-xl'>The page you're looking for doesn't exist or has been moved.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <Link
            to='/'
            className='rounded-lg bg-stellar-gold px-6 py-3 text-lg font-semibold text-black transition-colors-d-300 hover:bg-yellow-400'
          >
            Go Back Home
          </Link>
          <div className='flex gap-4'>
            <Link to='/about' className='text-stellar-gold hover:underline'>
              About
            </Link>
            <Link to='/projects' className='text-stellar-gold hover:underline'>
              Projects
            </Link>
            <Link to='/resume' className='text-stellar-gold hover:underline'>
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
