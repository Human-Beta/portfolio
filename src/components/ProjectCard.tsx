import type { Project } from '@/data/projects';

import ExternalLink from '@/components/ExternalLink';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { image, imageAlt, title, description, links } = project;
  return (
    <div className='z-base flex flex-col gap-4 h-full p-6 bg-transparent rounded-lg transition-all-d-300 shadow-stellar-gold/40 shadow-[0_4px_12px] hover:scale-102 hover:shadow-stellar-gold/45 hover:shadow-[0_6px_15px]'>
      <div className='w-full overflow-hidden rounded-md'>
        <img src={image} alt={imageAlt} className='w-full h-48 object-cover' />
      </div>

      <div className='flex-1 flex flex-col gap-2'>
        <h3 className='text-xl font-bold font-family-heading text-center text-stellar-gold'>{title}</h3>
        <p className='text-lunar-gray leading-relaxed flex-1'>{description}</p>
      </div>

      <div className='flex flex-col gap-2'>
        {links.map((link, index) => (
          <ExternalLink
            key={index}
            to={link.url}
            className='flex-full-center w-full px-4 py-2 border border-stellar-gold/60 font-medium text-stellar-gold rounded-lg transition-all-d-300 hover:bg-stellar-gold/90 hover:text-deep-space'
          >
            View {link.label} on GitHub
          </ExternalLink>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
