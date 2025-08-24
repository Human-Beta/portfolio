import { Link } from 'react-router-dom';

const AboutText = () => {
  const highlight = (text: string) => <span className='text-stellar-gold'>{text}</span>;

  const techHighlight = (text: string) => (
    <span className='text-nebula-pink bg-nebula-pink/20 font-medium px-1 rounded'>{text}</span>
  );

  return (
    <div className='flex flex-col items-center gap-5 p-4 text-lunar-gray'>
      <h1 className='text-3xl font-bold'>Know Who {highlight("I'M")}</h1>
      <p className='text-xl'>
        Hi, everyone, I'm {highlight('Mykyta Shyshov')} from {highlight('Odesa, Ukraine')}!
        <br />
        <br />
        I’m currently employed as a Fullstack Developer at{' '}
        <Link
          to='https://aspira.global/'
          target='_blank'
          className='text-astral-blue hover:text-stellar-gold transition-colors'
        >
          Aspira Ltd.
        </Link>{' '}
        with a strong background in {techHighlight('Java')}, {techHighlight('Spring')}, {techHighlight('MySQL')},{' '}
        {techHighlight('TypeScript')}, {techHighlight('Vue')}, and {techHighlight('React')}.
        <br />I enjoy building reliable and scalable solutions, and often integrate tools like {techHighlight(
          'Redis'
        )}{' '}
        and {techHighlight('ClickHouse')} to optimize performance.
        <br />I have professional experience working with {techHighlight('Hybris')}, and I also practice and expand
        cloud technologies skills ({techHighlight('AWS')}, {techHighlight('GCP')}).
        <br />I like applying {techHighlight('AI')} tools to speed up development and improve workflows.
      </p>
    </div>
  );
};

export default AboutText;
