require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'ChainGraph.io',
    description: 'Blockchain real-time data without any hassle.',
    author: '@chaingraph_io',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown-pages`,
    //     path: `${__dirname}/content/blog`,
    //   },
    // },
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/locales`,
        name: 'locale',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://blockmatic.us1.list-manage.com/subscribe/post?u=14b78e1c6dd8f997bd1f811ee&amp;id=d6963f42ea',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ChainGraph.io',
        short_name: 'ChainGraph',
        start_url: '/',
        background_color: '#151325',
        theme_color: '#151325',
        display: 'minimal-ui',
        icon: 'src/images/thumbnail.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages: ['en', 'es', 'cn'],
        defaultLanguage: 'en',
        siteUrl: 'https://chaingraph.io/',
        i18nextOptions: {
          defaultNS: 'common',
          // debug: true,
          lowerCaseLng: true,
          saveMissing: false,
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
