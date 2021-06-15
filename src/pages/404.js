import * as React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import '../styles/custom.css';

// markup
const NotFoundPage = () => {
  return (
    <div className='e404 h-screen'>
      <SEO title='404 Error' />
      <div className='flex items-center justify-center text-white'>
        <div className='bg-black bg-opacity-70 px-8 rounded-b-lg'>
          <div className='e404-content flex flex-col items-center justify-center py-4'>
            <h1>404 Error!</h1>
            <div>
              <p className='font-mono'>page not found</p>
            </div>
            <div className='mb-4'>
              <span role='img' className='text-5xl' aria-label='shock emoji'>
                😵
              </span>
              <span role='img' className='text-5xl mx-5' aria-label='cyclist'>
                🚴🏼‍♂️
              </span>
              <span role='img' className='text-5xl' aria-label='wind gust'>
                💨
              </span>
            </div>
            <div className='flex items-center justify-center'>
              <Link
                to='/'
                className='px-5 py-3 bg-blue-500 rounded-lg shadow-md font-bold tracking-wide hover:bg-blue-900'>
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
