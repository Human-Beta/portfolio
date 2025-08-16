const Home = () => {
  return (
    <div className='flex flex-1 items-center justify-between px-25'>
      <div className='flex flex-col gap-15 p-4 text-lunar-gray'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl'>
            Hi There!
            <span className='inline-block origin-[70%_70%] animate-wave' role='img' aria-labelledby='wave'>
              👋🏻
            </span>
          </h1>
          <h1 className='text-4xl'>
            I'M <strong className='text-stellar-gold'>MYKYTA SHYSHOV</strong>
          </h1>
        </div>
        <h1 className='text-2xl text-stellar-gold'>Software Developer</h1>
      </div>
      <img
        src='https://cdn.shopify.com/s/files/1/0565/8021/0861/files/steptodown_3.png?v=1707392483'
        alt='pug'
        width='300'
        height='300'
        className='z-base'
      />
    </div>
  );
};

export default Home;
