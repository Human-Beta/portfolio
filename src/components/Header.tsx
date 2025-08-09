import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className='p-4 bg-gray-800 text-white flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold'>
          Sm.
        </Link>
        <div className='flex gap-12 text-lg'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/Resume'>Resume</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/github'>GitHub</Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
