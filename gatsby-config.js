const path = require('path')

module.exports = {
  siteMetadata: {
    author: `Chris Gibbons`,
    siteTitleTag: `UX Technologist`,
    siteDescription: `Principal UI/front end developer & UX technologist based in Blackpool // Manchester`,
    introTitle: `Hello, I'm Chris Gibbons.`,
    tagline: `I’m a UX Technologist and principal UI/front end developer/consultant from the UK.`,
    siteUrl: `https://www.gbbns.co`,
    urlSlug: `gbbns.co`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname, `src`),
      },
      options: {
        name: `writing`,
        path: path.join(__dirname, `src/writing`),
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Rubik:900`, `Space Mono`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: path.join(__dirname, `src/images/favicon.png`),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-31834421-2`,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gbbns.co`,
        short_name: `gbbns`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/apple-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-purgecss`, // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: [`/main.css`], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    `gatsby-plugin-netlify`, // make sure to keep it last in the array
  ],
}
