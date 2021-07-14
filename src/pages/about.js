import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const coreValues = [
  {
    value: 'Personal accountability',
    valueStatement: 'Be accountable for delivering on your commitments.',
  },
  {
    value: 'Have empathy & integrity',
    valueStatement: 'Be understanding towards others & be real!',
  },
  {
    value: 'Always keep growing',
    valueStatement: 'Never stop learning and improving.',
  },
  {
    value: 'Family & Friends',
    valueStatement: 'Most important network you will ever have.',
  },
  {
    value: 'Respect for people',
    valueStatement: 'Treat people how you want to be treated.',
  },
  {
    value: 'Keep it simple',
    valueStatement: 'Life is too short for complicated.',
  },
  {
    value: 'Financial literacy ',
    valueStatement: 'Understand how to grow your money.',
  },
  {
    value: 'Master the fundamentals',
    valueStatement: 'Once master them everything else will fall into place.',
  },
  {
    value: 'Sustainability',
    valueStatement: 'Do your bit for the climate',
  },
  {
    value: 'Don’t be afraid to enjoy the little things',
    valueStatement: 'Life can be tough, enjoy the little things.',
  },
];

const AboutPage = () => (
  <Layout>
    <SEO title='About Me' />

    <section className='container mx-auto prose prose-lg'>
      <div>
        <h2>
          About Paul{' '}
          <span role='img' className='text-3xl' aria-label='person behind a laptop'>
            👨🏼‍💻
          </span>
        </h2>

        <p>
          Paul currently works as a Solution Engineer at <a href='https://pulsepoint.com/'>PulsePoint</a>.
          Where he spends his time building internal tools as well as troubleshooting internal and external
          tech-related issues. He has now been with the company for over 5 years.{' '}
        </p>
        <p>
          He currently lives in West London with his wife and dog Charlie{' '}
          <i>(aka Chumbo, that's a story for another time)</i>.
        </p>

        <p>
          Paul enjoys keeping up to date with the latest financial & crypto news, he's a strong believer in
          Financial Literacy and the skills it brings such as personal financial management, budgeting, and
          investing. Financial literacy is the foundation of your relationship with money.
        </p>

        <p>
          When not being a solutions engineer or financially savvy, he enjoys getting out on this road bike
          riding miles upon miles.
        </p>

        <p>Paul also tries to live by his core values which are the following:</p>

        <h3>
          Core Values{' '}
          <span role='img' className='text-3xl' aria-label='space alien'>
            🙏
          </span>
        </h3>
        <ul className='list-outside ml-0'>
          {coreValues.map((v) => (
            <li className='flex flex-col'>
              <span className='font-bold'>{v.value}</span>
              <span className='font-light'>{v.valueStatement}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
