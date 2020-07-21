import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LatestEpisode from "../components/latest-episode"
import { graphql } from "gatsby"

import RSS from "../images/icons/rss.svg"
import SPOTIFY from "../images/icons/spotify.svg"
import HEADPHONES from "../images/icons/headphones.svg"
import APPLE from "../images/icons/apple.svg"

const IndexPage = (props) =>  {

  const episode = props.data.episode.edges[0].node
  
  return (
    <Layout>
      <SEO title="Home | Landing In Tech" />
      <section className="flex justify-center items-center flex-col py-12">
      <LatestEpisode details={episode}/>
      <div className="flex flex-col md:flex-row">
        <a href="https://feeds.soundcloud.com/users/soundcloud:users:849950239/sounds.rss" className="p-2 green-button flex items-center justify-center md:mr-5"><img src={RSS} className="mb-0 mr-2" alt="RSS Feed" /> RSS</a>
        <a href="https://podcasts.apple.com/gb/podcast/landing-in-tech/id1524211616" className="p-2 green-button flex items-center justify-center md:mr-5"><img src={APPLE} className="mb-0 mr-2" alt="RSS Feed" /> APPLE PODCAST</a>
        <a href="https://open.spotify.com/show/6wKJSgr5FSOUMWbuQcVbxh" className="p-2 green-button flex items-center justify-center md:mr-5"><img src={SPOTIFY} className="mb-0 mr-2" alt="RSS Feed" /> SPOTIFY</a>
        <a href="https://www.breaker.audio/landing-in-tech" className="p-2 green-button flex items-center justify-center"><img src={HEADPHONES} className="mb-0 mr-2" alt="RSS Feed" /> BREAKER</a>
      </div>
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