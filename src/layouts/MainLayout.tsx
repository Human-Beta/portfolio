import { Outlet } from 'react-router-dom';

import BackgroundStars from '@/components/BackgroundStars';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const containerClass = 'container mx-auto px-4 md:px-8 2xl:px-30';

function MainLayout() {
  return (
    <div className='bg-deep-space flex flex-col min-h-screen'>
      <BackgroundStars />
      <Header className={containerClass} />
      <div className={`${containerClass} flex-1 flex flex-col`}>
        <main className='flex flex-1 py-8'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
