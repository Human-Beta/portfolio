import { DownloadIcon } from '@/assets/Icons';

import ExternalLink from '@/components/ExternalLink';

interface Props {
  itemName: string;
}

const DownloadButton = ({ itemName }: Props) => {
  return (
    <ExternalLink
      to='/resume.pdf'
      className='px-10 py-2 bg-stellar-gold/70 text-white rounded-lg hover:bg-stellar-gold/80 duration-300 flex items-center gap-2'
    >
      <DownloadIcon className='w-4 h-4' />
      Download {itemName}
    </ExternalLink>
  );
};

export default DownloadButton;
