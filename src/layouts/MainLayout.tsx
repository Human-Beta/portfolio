import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

function MainLayout() {
  return (
    <div className='container mx-auto px-4 md:px-8 lg:px-16 flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1 py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
