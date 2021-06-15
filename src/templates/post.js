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
      <div className='mt-4'>
        <h1 className=''>{props.data.contentfulPost.title}</h1>
        <p className=''>
          {props.data.contentfulPost.date} ·{' '}
          {props.data.contentfulPost.content.childMarkdownRemark.timeToRead} min read
        </p>
      </div>

      <div
        className=''
        dangerouslySetInnerHTML={{
          __html: props.data.contentfulPost.content.childMarkdownRemark.html,
        }}></div>
    </Layout>
  );
};

export default Post;
