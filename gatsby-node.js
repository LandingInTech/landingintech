/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode, basePath: "episode/" })
    if (node.frontmatter.excerpt) {
      createNodeField({
        name: `slug`,
        node,
        value: `/articles${value}`,
    })
    } else {
      createNodeField({
        name: `slug`,
        node,
        value: `/episodes${value}`,
    })
    }

  }
}
