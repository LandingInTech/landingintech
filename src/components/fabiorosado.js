import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"



const FabioCard = () => {
    const data = useStaticQuery(
        graphql`
            query {
                avatar: file(relativePath: {eq: "FabioRosado.png"}) {
                    childImageSharp {
                        fixed(width: 200, height: 200) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )

    return (
        <div className="episode-card">
            <Img fixed={data.avatar.childImageSharp.fixed} alt="FabioRosado" />
            <div className="ml-8 pt-5">
                <p className="episode-title text-xl">FabioRosado</p>
                <p className=''>Self-taught developer by night and Flight Attendant by day.</p>
                <p>
                    <a href="https://fabiorosado.dev">Website</a> | <a href="https://twitter.com/FabioRosado_"> Twitter</a> | <a href="https://github.com/FabioRosado"> Github</a> | <a href="https://www.instagram.com/FabioRosado"> Instagram</a>
                </p>
            </div>

            
        
        </div>
    )

}

export default FabioCard