module.exports = {
  siteMetadata: {
    title: `Landing in Tech`,
    description: `Talking with developers about their journey into tech.`,
    author: `FabioRosado`,
    siteUrl: `https://landingintech.com`
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/src/episodes`
      }
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
            {
              serialize: ({ query: { site, allMarkdownRemark }}) => {
                return allMarkdownRemark.edges.map(edge => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.frontmatter.excerpt,
                    date: edge.node.frontmatter.date,
                    url: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.slug}`,
                    guid: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.slug}`,
                    custom_elements: [{"content:encoded": edge.node.html}]
                  })
                })
              },
              query: `
              {
                allMarkdownRemark(
                  filter: {frontmatter: {categories: {ne: "Projects"}}}, 
                  sort: {fields: [frontmatter___date], order: DESC}
                ) {
                  edges {
                    node {
                      frontmatter {
                        excerpt
                        slug
                        title
                        date
                      }
                    }
                  }
                }
              }`,
              output: "/rss.xml",
              title: "Landing in Tech RSS Feed",
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
