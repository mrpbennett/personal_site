import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const social = [
  {
    url: 'https://github.com/mrpbennett',
    name: 'Github',
  },
  {
    url: 'https://www.linkedin.com/in/paulandrewbennett',
    name: 'Linkedin',
  },
  {
    url: 'https://www.strava.com/athletes/866413',
    name: 'Strava',
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <section>
      <h2>
        Hi there{' '}
        <span role='img' className='text-3xl' aria-label='waving hand'>
          👋
        </span>
      </h2>
      <p>
        I work at <a href='https://pulsepoint.com'>PulsePoint</a> as a Solutions Engineer. I enjoy using
        Python a lot and use it for most of my projects! However, this site is built with{' '}
        <a href='https://www.gatsbyjs.com'>GatsbyJS</a> and hosted via{' '}
        <a href='https://www.gatsbyjs.com/products/cloud'>Gatsby Cloud</a>. You have to have some React
        knowledge right?{' '}
        <span role='img' alt='cool dude' className='text-xl'>
          😎
        </span>
      </p>

      <p>
        I often keep a repo of learnings from previous projects which can be found{' '}
        <a href='https://github.com/mrpbennett/TIL'>here</a>. Which turns out to be a great resource for when
        I need a refresh.
      </p>

      <p>
        I also love to race bikes{' '}
        <span role='img' className='ml-2 text-3xl' aria-label='cyclist'>
          🚴🏼‍♂️
        </span>
        <span role='img' className='text-3xl' aria-label='wind burst'>
          💨
        </span>
      </p>

      <p>You can find me on the internet below:</p>

      <ul>
        {social.map((link) => (
          <li>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>

      <p>
        If you like reading my content, you can also read my trash tweets on{' '}
        <a href='https://twitter.com/mrpbennett'>Twitter</a>
      </p>
    </section>
  </Layout>
);

export default IndexPage;
