import { Link } from 'react-router-dom';

const AboutText = () => {
  const highlight = (text: string) => <span className='text-stellar-gold'>{text}</span>;

  const techHighlight = (text: string, link: string) => (
    <Link to={link} target='_blank' className='underline font-medium'>
      {text}
    </Link>
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
          className='text-astral-blue hover:drop-shadow-[0_0_4px]/80 transition-colors'
        >
          Aspira Ltd.
        </Link>{' '}
        with a strong background in {techHighlight('Java', 'https://www.java.com/')},{' '}
        {techHighlight('Spring', 'https://spring.io/')}, {techHighlight('MySQL', 'https://www.mysql.com/')},{' '}
        {techHighlight('TypeScript', 'https://www.typescriptlang.org/')}, {techHighlight('Vue', 'https://vuejs.org/')},
        and {techHighlight('React', 'https://react.dev/')}.
        <br />I enjoy building reliable and scalable solutions, and often integrate tools like{' '}
        {techHighlight('Redis', 'https://redis.io/')} and {techHighlight('ClickHouse', 'https://clickhouse.com/')} to
        optimize performance.
        <br />I have professional experience working with{' '}
        {techHighlight('Hybris', 'https://www.sap.com/products/acquired-brands/what-is-hybris.html')}, and I also
        practice and expand cloud technologies skills ({techHighlight('AWS', 'https://aws.amazon.com/')},{' '}
        {techHighlight('GCP', 'https://cloud.google.com/gcp')}).
        <br />I like applying AI tools to speed up development and improve workflows.
      </p>
    </div>
  );
};

export default AboutText;
