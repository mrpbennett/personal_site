import React from 'react';
import { Link } from 'gatsby';
import { Timeline } from 'react-twitter-widgets';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

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

    <Hero />

    <section className='container mx-auto prose md:prose-lg'>
      <p>
        Paul works at <a href='https://pulsepoint.com'>PulsePoint</a> as a Solutions Engineer. His interests
        lie in financial literacy, programming and cycling, to name a few. If you want to get to know Paul a
        little more there is more information on his <Link to='/about'>about page</Link>.
      </p>

      <p>You can find him on the internet below:</p>

      <ul>
        {social.map((link) => (
          <li>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>

      <hr />

      <div>
        <p>
          If you like reading his content, you can also read his tweets on{' '}
          <a href='https://twitter.com/mrpbennett'>Twitter</a> here is a taste:
        </p>

        <Timeline
          dataSource={{ sourceType: 'url', url: 'https://twitter.com/mrpbennett' }}
          options={{ chrome: 'noheader, nofooter, transparent, noborders', tweetLimit: '1' }}
        />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
