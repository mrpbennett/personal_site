require('dotenv').config();

module.exports = {
  siteMetadata: {
    title:
      'Paul Bennett - Advocate for Financial literacy. Cyclist, Crypto, Foodie and the occasional dev. London',
    description: 'Advocate for Financial literacy. Cyclist, Crypto, Foodie and the occasional dev. London',
    author: '@mrpbennett',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
