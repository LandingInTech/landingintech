import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { SimilarEpisodesFactory } from "./SimilarEpisodesFactory"

const getEpisodesFromQuery = episodes => {
  if (episodes) {
    return episodes.edges
      .map(edge => edge)
      .map(node => Object.assign({}, node.node))
  }
  return []
}

const SimilarEpisodesComponent = ({ episodes }) => (
  <section className="similar-episodes-section">
    <h2>You might also like these episodes</h2>
    <div className="grid grid-cols-2 gap-4 my-5">
      {episodes.map((episode) => {
        const details = episode.episode.frontmatter
        const slug = episode.episode.fields.slug

        return (
          <div className="episode-card" key={details.title}>
            <div className="p-4">
            <Link className="pt-4" to={slug}>
              <h3 className="episode-title">{details.title}</h3>
              <p className="episode-guest">{details.guest}</p>
              <p className="episode-number">{details.episode}</p>
            </Link>
            </div>
          </div>
        )
      })}
    </div>
  </section>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        episodes: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                job
                title
                episode
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
      }
    `}
    render={data => {
      const { tags, job, currentEpisodePath } = props

      const episodes = getEpisodesFromQuery(data.episodes)

      const SimilarEpisodes = new SimilarEpisodesFactory(
        episodes,
        currentEpisodePath
      )
        .setTags(tags)
        .setJob(job)
        .getEpisodes()

      return <SimilarEpisodesComponent episodes={SimilarEpisodes} />
    }}
  />
)
