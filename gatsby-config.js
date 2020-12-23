const remarkSlug = require(`remark-slug`)

module.exports = {
  siteMetadata: {
    title: `Landing in Tech`,
    description: `Each developer has a unique journey that they undertook to get into tech and achieve their position we talk with them about that journey.`,
    author: `FabioRosado`,
    siteUrl: `https://landingintech.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://landingintech.com`,
      },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/pages/articles`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      extensions: [".mdx", ".md"],
      options: {
        remarkPlugins: [remarkSlug],
        defaultLayouts: {
          default: require.resolve("./src/templates/episode-layout.js"),
          articles: require.resolve("./src/templates/articles-layout.js"),
        },
      },
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
        postCssPlugins: [require("tailwindcss"), require("./tailwind.config")],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-173184715-1",
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          "/offline-plugin-app-shell-fallback",
        ],
        addUncaughtPages: true,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://landingintech.com",
        sitemap: "https://landingintech.com/sitemap-pages.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-mdx-embed`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              siteUrl
              description
              author
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                })
              })
            },
            query: `
          {
            allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
              edges {
                node {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    date
                    title
                  }
                }
              }
            }
          }
        `,
            output: "/rss.xml",
            title: "Landing in Tech RSS Feed",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
