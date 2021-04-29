module.exports = {
  siteMetadata: {
    title: `Thibaud Vincent - multidisciplinary creative and dev`,
    description: `Thibaud Vincent is a multidisciplinary creative working as a javascript developer, graphic designer and sound artist based in Paris.`,
    author: `Thibaud Vincent`,
    siteUrl: "https://www.larkcrail.com/",
    social: [
      {
        name: "Instagram",
        url: "https://instagram.com/larkcrail",
      },
      {
        name: "Github",
        url: "https://github.com/thibaud-vct",
      },
      {
        name: "Linkedin",
        url: "https://linkedin.com/in/thibaudfaurevincent/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `markdown-projects`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thibaud Vincent - multidisciplinary creative and dev`,
        short_name: `Thibaud Vincent - multidisciplinary`,
        start_url: `/`,
        background_color: `#d8dcdf`,
        theme_color: `#d8dcdf`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
