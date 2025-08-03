import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

function MainLayout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1 px-4 py-8 md:px-8 lg:px-16'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
