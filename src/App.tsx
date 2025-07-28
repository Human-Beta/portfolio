import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import '@/App.css';
import About from '@/pages/About';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';

function App() {
  return (
    <Router>
      <nav className='p-4 bg-gray-800 text-white flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
