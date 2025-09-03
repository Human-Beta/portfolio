import { useCallback, useMemo, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import DownloadButton from '@/components/DownloadButton';
import LoadingSpinner from '@/components/LoadingSpinner';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const pageNumbers = useMemo(() => {
    return [...Array(numPages).keys()].map(pageIndex => pageIndex + 1);
  }, [numPages]);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setHasError(false);
  }, []);

  const onDocumentLoadError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div className='flex-1 flex-full-center'>
        <div className='max-w-md bg-galactic-gray/20 rounded-lg p-6 text-center text-lunar-gray'>
          <svg
            className='w-16 h-16 mx-auto mb-4 text-stellar-gold'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <p className='text-lg mb-4'>Unable to load CV. Please try again later or contact me directly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex-1 flex flex-col items-center gap-5'>
      <DownloadButton itemName='CSV' />

      <Document
        file='/resume.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<LoadingSpinner />}
      >
        {pageNumbers.map(pageNumber => (
          <Page
            key={pageNumber}
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            scale={1.3}
          />
        ))}
      </Document>

      <DownloadButton itemName='CSV' />
    </div>
  );
};

export default Resume;
