import { projects } from '@/data/projects';

import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  return (
    <div className='flex-1 flex flex-col gap-10 xl:gap-15'>
      <div className='text-center text-lunar-gray'>
        <h1 className='text-4xl font-bold mb-4'>
          My Recent <span className='text-stellar-gold'>Works</span>
        </h1>
        <p className='text-xl'>Take a look at some of my latest projects.</p>
      </div>

      <div className='flex flex-wrap justify-center z-base gap-5 lg:gap-8'>
        {projects.map(project => (
          <div key={project.id} className='md:w-[220px] lg:w-[290px] xl:w-[350px] 2xl:w-[400px]'>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
