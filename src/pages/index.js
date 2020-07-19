import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LatestEpisode from "../components/latest-episode"
import { graphql } from "gatsby"

const IndexPage = (props) =>  {

  const episode = props.data.episode.edges[0].node
  
  return (
    <Layout>
      <SEO title="Home | Landing In Tech" />
      <section className="flex justify-center items-center flex-col py-12">
      <LatestEpisode details={episode}/>
      
      </section>
      
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    episode: allMdx(limit: 1, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            job
            title
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