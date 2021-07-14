import React from 'react';
import { FaStrava, FaLinkedin, FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

import '../styles/layout.css';
import '../styles/custom.css';

import Nav from '../components/nav';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen pt-10 mx-4 sm:px-0'>
      <header className='container mx-auto prose md:prose-lg md:flex md:justify-between md:items-center mb-5'>
        <Nav />
      </header>
      <div className='flex-grow'>
        <main className=''>{children}</main>
      </div>
      <footer className='flex items-center justify-between px-10 py-5'>
        <div class='container mx-auto py-3'>
          <span class='font-mono text-xs tracking-widest'>{new Date().getFullYear()} @mrpbennett</span>
        </div>
        <div>
          <nav className='flex'>
            <a href='#' className='mr-5'>
              <FaGithub className='text-2xl text-gray-400 hover:text-blue-400' />
            </a>
            <a href='#' className='mr-5'>
              <FaLinkedin className='text-2xl text-gray-400 hover:text-blue-400' />
            </a>
            <a href='#'>
              <FaStrava className='text-2xl text-gray-400 hover:text-blue-400' />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
