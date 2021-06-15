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
        I work at PulsePoint as a Solutions Engineer. I enjoy using Python alot! I often keep a{' '}
        <a href='https://github.com/mrpbennett/TIL'>TIL log</a> of what I learn about on the job or in
        personal projects.
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
