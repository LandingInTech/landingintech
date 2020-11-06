import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EpisodeCard from "../components/episode-card"

export default props => {
  return (
    <Layout>
      <SEO title="Episodes" />
      <h1 className="my-12 plane">Episodes</h1>
      {props.data.episodes.edges.map(episode => (
        <EpisodeCard details={episode} key={episode.node.frontmatter.title} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    episodes: allMdx(sort: { fields: [frontmatter___date], order: DESC }  filter: {fields: {slug: {regex: "/episodes/"}}}) {
      edges {
        node {
          frontmatter {
            job
            title
            episode
            tags
            guest
            date
            avatar {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
