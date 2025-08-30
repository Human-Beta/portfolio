import { Link } from 'react-router-dom';

interface Props {
  itemName: string;
}

const DownloadButton = ({ itemName }: Props) => {
  return (
    <Link
      to='/resume.pdf'
      target='_blank'
      rel='noopener noreferrer'
      className='px-10 py-2 bg-stellar-gold/70 text-white rounded-lg hover:bg-stellar-gold/80 duration-300'
    >
      Download {itemName}
    </Link>
  );
};

export default DownloadButton;
