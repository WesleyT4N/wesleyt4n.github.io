module.exports = {
  siteMetadata: {
    title: `Wes Tan's Portfolio`,
    description: `Welcome to my portfolio`,
    author: `@wesleyt4n`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wes Tan's Portfolio`,
        short_name: `Wes Tan's Portfolio`,
        start_url: `/`,
        background_color: `#1e345d`,
        theme_color: `#1e345d`,
        display: `minimal-ui`,
        icon: `./src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
