function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-6'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
        <p className='text-sm text-center md:text-left'>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <a
            href='https://github.com/your-username'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-400 transition'
          >
            GitHub
          </a>
          <a
            href='https://linkedin.com/in/your-username'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-400 transition'
          >
            LinkedIn
          </a>
          <a href='mailto:your@email.com' className='hover:text-gray-400 transition'>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
