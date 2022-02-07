require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { PRISMIC_CUSTOM_TYPES_API_TOKEN, PRISMIC_REPOSITORY_NAME } = process.env

module.exports = {
  siteMetadata: {
    title: `Manny Ikomi`,
    description: `Design Thinker, Lifetime Learner, Digital Craftsman`,
    author: `@MannyIkomi`,
    socialMention: "@MannyIkomi",
    url: "https://mannyikomi.com",
    openGraphType: "website",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-143395225-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: PRISMIC_REPOSITORY_NAME,
        customTypesApiEndpoint: "https://customtypes.prismic.io/customtypes",
        customTypesApiToken: PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
