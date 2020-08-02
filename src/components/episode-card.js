import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const EpisodeCard = (data) => {
    const details = data.details.node.frontmatter
    const slug = data.details.node.fields.slug

    return (
        <div className="episode-card my-8">
            <div className="card-image">
                <Link to={slug}>
                    <Img class="card-image" alt={details.guest} fluid={details.avatar.childImageSharp.fluid}/>
                </Link>
            </div>
            <div className="episode-text">
                <p className="episode-number">{details.episode}</p>
                <Link to={slug}>
                    <p className="episode-title">{details.title}</p>
                    <p className="episode-guest">{details.guest}</p>
                </Link>
            </div>
        </div>
    )
}

export default EpisodeCard