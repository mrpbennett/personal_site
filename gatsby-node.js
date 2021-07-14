const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// DYNAMICALLY CREATE PAGES FOR EACH POST
module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/post.js');
  const postResult = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  // Handle errors
  if (postResult.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  // Create the pages for each markdown file
  postResult.data.allContentfulPost.edges.forEach(({ node }) => {
    createPage({
      component: postTemplate,
      path: `/posts/${node.slug}`,
      context: {
        slug: node.slug,
      },
    });
  });

  // PAGINATION FOR BLOG POSTS
  const postsResult = await graphql(`
    {
      allContentfulPost(sort: { fields: date, order: DESC }, limit: 1000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (postsResult.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  // Create blog-list pages
  const posts = postsResult.data.allContentfulPost.edges;
  const postsPerPage = 12;
  const postNumPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: postNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/posts' : `/posts/${i + 1}`,
      component: path.resolve('./src/templates/post-list.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        postNumPages,
        currentPage: i + 1,
      },
    });
  });
};
