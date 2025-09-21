import AwsIcon from '@/assets/skill-set/AwsIcon';
import Css3Icon from '@/assets/skill-set/Css3Icon';
import DockerIcon from '@/assets/skill-set/DockerIcon';
import GCPIcon from '@/assets/skill-set/GCPIcon';
import GitIcon from '@/assets/skill-set/GitIcon';
import Html5Icon from '@/assets/skill-set/Html5Icon';
import HybrisIcon from '@/assets/skill-set/HybrisIcon';
import JavaIcon from '@/assets/skill-set/JavaIcon';
import JavaScriptIcon from '@/assets/skill-set/JavaScriptIcon';
import JenkinsIcon from '@/assets/skill-set/JenkinsIcon';
import MySqlIcon from '@/assets/skill-set/MySqlIcon';
import PostgreSqlIcon from '@/assets/skill-set/PostgreSqlIcon';
import ReactIcon from '@/assets/skill-set/ReactIcon';
import RedisIcon from '@/assets/skill-set/RedisIcon';
import SpringBootIcon from '@/assets/skill-set/SpringBootIcon';
import TypeScriptIcon from '@/assets/skill-set/TypeScriptIcon';
import VueIcon from '@/assets/skill-set/VueIcon';

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
