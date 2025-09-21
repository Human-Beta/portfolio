const PubWoBack = ({ className }: { className?: string }) => (
  <div className={`overflow-hidden ${className ?? ''}`}>
    <img
      src='/pug_wo_back.webp'
      alt='Character illustration'
      className='-mt-[18%] -mb-[16%]'
      loading='lazy'
      decoding='async'
    />
  </div>
);

export default PubWoBack;
