import { projects } from '@/data/projects';

import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  return (
    <div className='flex-1 flex flex-col gap-15'>
      <div className='text-center text-lunar-gray'>
        <h1 className='text-4xl font-bold mb-4'>
          My Recent <span className='text-stellar-gold'>Works</span>
        </h1>
        <p className='text-xl'>Take a look at some of my latest projects.</p>
      </div>

      <div className='flex flex-wrap justify-center gap-8 z-base'>
        {projects.map(({ id, image, imageAlt, title, description, githubUrl }) => (
          <div
            key={id}
            className='w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] min-w-[300px] max-w-[400px]'
          >
            <ProjectCard
              image={image}
              imageAlt={imageAlt}
              title={title}
              description={description}
              githubUrl={githubUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
