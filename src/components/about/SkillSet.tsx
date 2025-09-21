import {
  AwsIcon,
  Css3Icon,
  DockerIcon,
  GCPIcon,
  GitIcon,
  Html5Icon,
  HybrisIcon,
  JavaIcon,
  JavaScriptIcon,
  JenkinsIcon,
  MySqlIcon,
  PostgreSqlIcon,
  ReactIcon,
  RedisIcon,
  SpringBootIcon,
  TypeScriptIcon,
  VueIcon,
} from '@/assets/skill-set';

import IconLink from '@/components/about/IconLink';

const skillSet = [
  [JavaIcon, 'https://www.java.com/en/'],
  [SpringBootIcon, 'https://spring.io/projects/spring-boot'],
  [MySqlIcon, 'https://www.mysql.com/'],
  [PostgreSqlIcon, 'https://www.postgresql.org/'],
  [RedisIcon, 'https://redis.io/'],
  [AwsIcon, 'https://aws.amazon.com/'],
  [GCPIcon, 'https://cloud.google.com/'],
  [DockerIcon, 'https://www.docker.com/'],
  [HybrisIcon, 'https://www.sap.com/products/acquired-brands/what-is-hybris.html'],
  [GitIcon, 'https://git-scm.com/'],
  [JenkinsIcon, 'https://www.jenkins.io/'],
  [TypeScriptIcon, 'https://www.typescriptlang.org/'],
  [JavaScriptIcon, 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
  [VueIcon, 'https://vuejs.org/'],
  [ReactIcon, 'https://reactjs.org/'],
  [Html5Icon, 'https://developer.mozilla.org/en-US/docs/Web/HTML'],
  [Css3Icon, 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
] as const;

const SkillSet = () => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='text-3xl text-lunar-gray font-bold text-center'>
        Professional <span className='text-stellar-gold'>Skill Set</span>
      </p>
      <div className='flex items-center flex-wrap justify-center gap-10 text-lunar-gray'>
        {skillSet.map(([icon, link], index) => (
          <IconLink key={index} to={link} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
