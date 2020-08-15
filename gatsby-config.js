module.exports = {
  siteMetadata: {
    title: `Landing in Tech`,
    description: `Each developer has a unique journey that they undertook to get into tech and achieve their position we talk with them about that journey.`,
    author: `FabioRosado`,
    siteUrl: `https://landingintech.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://landingintech.com`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/src/pages/episodes`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      extensions: [".mdx", ".md"],
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/episode-layout.js")
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Landing in Tech`,
        short_name: `Landing in Tech`,
        start_url: `/`,
        background_color: `#271B40`,
        theme_color: `#FC4056`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config")
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-173184715-1"
      }

    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [              
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          '/offline-plugin-app-shell-fallback'
        ],
        addUncaughtPages: true,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
