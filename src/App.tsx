import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';

import LoadingSpinner from '@/components/LoadingSpinner';

const About = lazy(() => import('@/pages/About'));
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Projects = lazy(() => import('@/pages/Projects'));
const Resume = lazy(() => import('@/pages/Resume'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='resume' element={<Resume />} />
            <Route path='projects' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
