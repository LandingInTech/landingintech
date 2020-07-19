import React from "react"

import { Link } from "gatsby"
import Img from "gatsby-image"

import left from "../images/decoration-left.svg"
import right from "../images/decoration-right.svg"


const LatestEpisode = (data) => {
    const details = data.details.frontmatter
    const slug = data.details.fields.slug

    return (

        <div className="my-12 card flex flex-col">
            <Link to={slug}>
                <h1 className="card-title">{details.title}</h1>
            </Link>
            <div className="images-area">
                    <img src={left} alt="" className="decoration" />
                    <Link to={slug}>
                        <Img className="avatar" alt={details.title} fluid={details.avatar.childImageSharp.fluid} />
                    </Link>
                    <img src={right} className="decoration" alt="" />
            </div>
            <Link to={slug}>
                <p className="guest-name">{details.guest}</p>
                <p className="guest-job">{details.job}</p>
            </Link>
            <div className="latest-episode">LATEST EPISODE</div>
        </div>
        
        
    )
}

export default LatestEpisode