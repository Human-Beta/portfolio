import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import '@/App.css';
import MainLayout from '@/layouts/MainLayout';

import About from '@/pages/About';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Resume from '@/pages/Resume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
