import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import '../styles/layout.css';

const data = [
  {
    to: '/',
    name: 'home',
    className: 'mr-10 capitalize',
  },
  {
    to: '/about',
    name: 'about',
    className: 'mr-10 capitalize',
  },
  {
    to: '/posts',
    name: 'blog',
    className: 'capitalize',
  },
];

const Layout = ({ children }) => {
  return (
    <div className='container mx-auto flex flex-col min-h-screen prose pt-10'>
      <header class=''>
        <h1 class='capitalize'>paul bennett</h1>

        <nav class='flex'>
          {data.map((link) => (
            <Link to={link.to} className={link.className} activeClassName={link.activeClassName}>
              {link.name}
            </Link>
          ))}
        </nav>
      </header>
      <div className='flex-grow'>
        <main>{children}</main>
      </div>
      <footer>
        <div class='container mx-auto py-3'>
          <p class='text-center text-xs tracking-wider'>{new Date().getFullYear()} @mrpbennett</p>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
