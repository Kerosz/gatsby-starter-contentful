require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `SiteTitle - Your brand equity here`,
    description: `Brand equity is a phrase used in the marketing industry refers to the perceived worth of a brand in and of itself—i.e., the social value of a well-known brand name. It is based on the idea that the owner of a well-known brand name can generate more revenue simply from brand recognition, as consumers perceive the products of well-known brands as better than those of lesser-known brands.`,
    author: `Andrei C.`,
    siteUrl: 'https://chirila.dev',
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
        name: `SiteTitle - Your brand equity here`,
        short_name: `sitetitle`,
        start_url: `/`,
        background_color: `#002F34`,
        theme_color: `#6AF0B0`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: `lato\:300,400,700,900`,
        display: 'swap',
      },
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-offline`,
  ],
};
