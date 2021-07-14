import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/custom.css';

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulPost(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 180)
            }
          }
        }
      }
    }
  }
`;

const PostList = (props) => {
  const { postNumPages } = props.pageContext;

  const posts = props.data.allContentfulPost.edges;

  return (
    <Layout>
      <SEO title='Posts' />

      {posts.map(({ node }) => {
        const title = node.title || node.slug;
        return (
          <div className='container mx-auto prose prose-lg'>
            <div className='mb-2'>
              <Link to={`/posts/${node.slug}`}>
                <h3 className='underline font-sans mb-1'>{title}</h3>
              </Link>

              <div className='flex items-center justify-between'>
                <span className='font-mono text-sm'>Posted on {node.date}</span>
              </div>
              <div>
                <p className=''>{node.content.childMarkdownRemark.excerpt}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className='px-4 py-3 flex items-center justify-center mb-4'>
        <div className='flex font-sans'>
          {Array.from({ length: postNumPages }, (_, i) => (
            <Link
              className='mx-2 py-1 px-3 hover:no-underline rounded-md bg-gray-200 hover:bg-gray-300 hvr-rotate no-underline'
              activeClassName='bg-blue-400 text-white'
              key={`pagination-number${i + 1}`}
              to={`/posts/${i === 0 ? '' : i + 1}`}>
              {i + 1}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PostList;
