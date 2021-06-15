import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const tech_i_use = [
  'Python',
  'SQL',
  'Docker',
  'HTML/CSS/SASS',
  'JavaScript (we have a love/hate relationship)',
];

const AboutPage = () => (
  <Layout>
    <SEO title='About Me' />

    <section>
      <div>
        <h2>
          About me{' '}
          <span role='img' className='text-3xl' aria-label='person behind a laptop'>
            👨🏼‍💻
          </span>
        </h2>
        <p>
          I'm a solutions engineer based in London, UK. Before solution engineering, I spent my time in
          account management within Ad Tech.
        </p>
        <h3>A brief overview of my tech journey</h3>
        <p>
          I have come to the developer world late, although I have always dabbled since my teens. I have never
          "seriously" learnt to code until 2019. Where I restarted to learn Python which will always be my
          first love, then on to things like React and Vue. Now though it's time to really dig into Python, I
          deal with a lot of data in my day to day, that's why I've switched my focus primarily to Python.
        </p>
        <p>
          As far as next steps, I'm still figuring out what I want to do and where I want to be. So stay tuned
          because I'll definitely be sharing more about what the future holds.
        </p>

        <h3>
          Tech I work with{' '}
          <span role='img' className='text-3xl' aria-label='space alien'>
            👾
          </span>
        </h3>
        <ul>
          {tech_i_use.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
