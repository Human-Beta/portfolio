import ExternalLink from '@/components/ExternalLink';

interface ProjectCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  githubUrl: string;
}

const ProjectCard = ({ image, imageAlt, title, description, githubUrl }: ProjectCardProps) => {
  return (
    <div className='flex flex-col gap-4 h-full p-6 bg-transparent rounded-lg transition-all-d-300 hover:scale-102 shadow-stellar-gold/40 shadow-[0_4px_12px] hover:shadow-stellar-gold/45 hover:shadow-[0_6px_15px]'>
      <div className='w-full overflow-hidden rounded-t-lg'>
        <img src={image} alt={imageAlt} className='w-full h-48 object-cover' />
      </div>

      <div className='flex-1 flex flex-col gap-2'>
        <h3 className='text-xl font-bold font-family-heading text-center text-stellar-gold'>{title}</h3>
        <p className='text-lunar-gray leading-relaxed flex-1'>{description}</p>
      </div>

      <ExternalLink
        to={githubUrl}
        className='flex-full-center w-full px-4 py-2 border border-stellar-gold/60 font-medium text-stellar-gold rounded-lg transition-all-d-300 hover:bg-stellar-gold/90 hover:text-deep-space'
      >
        View on GitHub
      </ExternalLink>
    </div>
  );
};

export default ProjectCard;
