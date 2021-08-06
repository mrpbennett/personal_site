import React from 'react';
import Memoji from '../images/memoji_1x1.png';

const Hero = () => {
  return (
    <section className='bg-gradient-to-b from-primary to-secondary -mx-4 px-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center prose md:prose-lg mb-8 py-4'>
        <div className='flex flex-col'>
          <span className='text-white text-2xl md:text-4xl font-semibold'>Paul Bennett</span>
          <span className='text-white text-xl md:text-2xl font-light'>Solutions Engineer</span>
        </div>
        <div>
          <img src={Memoji} alt='Memoji' className='m-0 w-28 md:w-48' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
