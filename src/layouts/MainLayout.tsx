import { Outlet } from 'react-router-dom';

import BackgroundStars from '@/components/BackgroundStars';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

function MainLayout() {
  return (
    <div className='bg-deep-space'>
      <BackgroundStars />
      <div className='container mx-auto px-4 md:px-8 lg:px-30 flex min-h-screen flex-col'>
        <Header />
        <main className='flex flex-1 py-8'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
