require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Unitech - Pest and termite control`,
    description: `Unitech Pest and Bed Bug Services is a full service, professional pest management company located in St. Louis, Missouri.  We stand prepared to eliminate unwanted pests in your home or business. Our fast, curteous and professional staff will listen to your concerns and promptly answer any questions you have regarding our methods of pest removal and the costs associated with it.`,
    author: `Nectbox`,
    siteUrl: "https://www.unitechpest.com",
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
        name: `Unitech - Pest and termite control`,
        short_name: `Unitech`,
        start_url: `/`,
        background_color: `#002F34`,
        theme_color: `#6AF0B0`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-offline`,
  ],
};
