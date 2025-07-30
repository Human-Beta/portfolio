import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className='p-4 bg-gray-800 text-white flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About</Link>
      </nav>
    </>
  );
}

export default Header;
