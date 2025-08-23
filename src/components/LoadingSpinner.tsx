const LoadingSpinner = () => {
  return (
    <div className='fixed inset-0 bg-deep-space flex items-center justify-center'>
      <div className='flex flex-col items-center gap-6'>
        {/* Animated spinning ring */}
        <div className='relative w-16 h-16'>
          <div className='absolute inset-0 border-4 border-galactic-gray border-opacity-20 rounded-full' />
          <div className='absolute inset-0 border-4 border-stellar-gold border-t-transparent rounded-full animate-spin' />
        </div>

        {/* Loading text */}
        <div className='text-lunar-gray text-lg font-medium'>
          Loading<span className='animate-pulse'>...</span>
        </div>

        {/* Subtle animated dots */}
        <div className='flex gap-1'>
          <div className='w-2 h-2 bg-stellar-gold rounded-full animate-bounce' style={{ animationDelay: '0ms' }} />
          <div className='w-2 h-2 bg-stellar-gold rounded-full animate-bounce' style={{ animationDelay: '150ms' }} />
          <div className='w-2 h-2 bg-stellar-gold rounded-full animate-bounce' style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
