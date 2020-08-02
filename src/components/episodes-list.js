import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Img from "gatsby-image"

const PastEpisodes = () => {

    const data = useStaticQuery(graphql`
        query {
            allMdx(skip: 1, limit:6, sort: {fields: [frontmatter___date], order: DESC}) {
                edges {
                node {
                    frontmatter {
                    episode
                    guest
                    title
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
    }`)


    return  (
        <section className="my-12">
            <h2 className="mb-5 green-plane underline red">Past Episodes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.allMdx.edges.map(episode => { 
                    const details = episode.node.frontmatter
                    const slug = episode.node.fields.slug
                    return (
                        <div className="episode-card" key={details.title}>
                        <div style={{minWidth: "100px"}}>
                            <Link to={slug}>
                                <Img class="card-image" alt={details.guest} fluid={details.avatar.childImageSharp.fluid}/>
                            </Link>
                        </div>
                        <div className="p-2 medium-text text-center md:text-left">
                        <p className="episode-number">{details.episode}</p>
                            <Link to={slug}>
                                <p className="episode-title ">{details.title}</p>
                                <p className="episode-guest">{details.guest}</p>
                            </Link>
                        </div>
                    </div>
                )})}

            </div>
        </section>
    )
}

export default PastEpisodes