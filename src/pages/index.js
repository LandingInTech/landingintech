import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LatestEpisode from "../components/latest-episode"
import PastEpisodes from "../components/episodes-list"
import ArticleCard from "../components/article-card"

import RSS from "../images/icons/rss.svg"
import SPOTIFY from "../images/icons/spotify.svg"
import HEADPHONES from "../images/icons/headphones.svg"
import APPLE from "../images/icons/apple.svg"
import GOOGLE from "../images/icons/google.svg"

const IndexPage = props => {
  const episode = props.data.episode.edges[0].node
  const articles = props.data.articles.nodes

  return (
    <Layout>
      <SEO title="Home | Landing In Tech" />
      <section className="flex justify-center items-center flex-col py-12">
        <LatestEpisode details={episode} />
        <div className="flex flex-col md:flex-row">
          <a
            href="https://feeds.soundcloud.com/users/soundcloud:users:849950239/sounds.rss"
            className="p-2 green-button flex items-center justify-center md:mr-5"
          >
            <img
              src={RSS}
              className="mb-0 mr-2"
              alt="RSS Feed"
              width="24"
              height="24"
            />{" "}
            RSS
          </a>
          <a
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zb3VuZGNsb3VkLmNvbS91c2Vycy9zb3VuZGNsb3VkOnVzZXJzOjg0OTk1MDIzOS9zb3VuZHMucnNz?sa=X&ved=0CAYQrrcFahcKEwigqoHx69vrAhUAAAAAHQAAAAAQAQ"
            className="p-2 green-button flex items-center justify-center md:mr-5"
          >
            <img
              src={GOOGLE}
              className="mb-0 mr-2"
              alt="Google feed"
              width="24"
              height="24"
            />
            G Podcasts
          </a>
          <a
            href="https://podcasts.apple.com/gb/podcast/landing-in-tech/id1524211616"
            className="p-2 green-button flex items-center justify-center md:mr-5"
          >
            <img
              src={APPLE}
              className="mb-0 mr-2"
              alt="Apple Feed"
              width="24"
              height="24"
            />{" "}
            APPLE PODCAST
          </a>
          <a
            href="https://open.spotify.com/show/6wKJSgr5FSOUMWbuQcVbxh"
            className="p-2 green-button flex items-center justify-center md:mr-5"
          >
            <img
              src={SPOTIFY}
              className="mb-0 mr-2"
              alt="Spotify Feed"
              width="24"
              height="24"
            />{" "}
            SPOTIFY
          </a>
          <a
            href="https://www.breaker.audio/landing-in-tech"
            className="p-2 green-button flex items-center justify-center"
          >
            <img
              src={HEADPHONES}
              className="mb-0 mr-2"
              alt="Breaker Feed"
              width="24"
              height="24"
            />{" "}
            BREAKER
          </a>
        </div>
      </section>

      <PastEpisodes />

      <section className="my-12">
        <h2 className="mb-0 green-plane underline red">Latest Articles</h2>
        <div
          className={
            articles.length > 3
              ? "grid grid-cols-1 md:grid-cols-3 gap-4"
              : "grid grid-cols-1"
          }
        >
          {articles.map(article => (
            <ArticleCard details={article} key={article.frontmatter.title} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    episode: allMdx(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/episodes/" } } }
    ) {
      edges {
        node {
          frontmatter {
            job
            title
            guest
            date
            tags
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
    articles: allMdx(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/articles/" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "dddd Mo, MMM YYYY")
          title
          excerpt
          tags
          category
        }
        fields {
          slug
        }
      }
    }
  }
`
