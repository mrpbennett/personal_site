import React from 'react';
import { Link } from 'gatsby';

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

const Nav = () => {
  return (
    <nav className='flex'>
      {data.map((link) => (
        <Link to={link.to} className={link.className} activeClassName={link.activeClassName}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
