import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      content {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`;

const Post = (props) => {
  return (
    <Layout>
      <SEO title={props.data.contentfulPost.title} />
      <div className='mt-4 container mx-auto prose prose-lg'>
        <h2 className=''>{props.data.contentfulPost.title}</h2>
        <div className='flex items-center justify-between'>
          <p className=''>
            {props.data.contentfulPost.date} ·{' '}
            {props.data.contentfulPost.content.childMarkdownRemark.timeToRead} min read
          </p>
        </div>
      </div>

      <div
        className='container mx-auto prose prose-lg mt-5'
        dangerouslySetInnerHTML={{
          __html: props.data.contentfulPost.content.childMarkdownRemark.html,
        }}></div>
    </Layout>
  );
};

export default Post;
