import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "./layout"
import SEO from "../components/seo"


export default ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            mdx {
                frontmatter {
                date
                guest
                job
                title
                ogImage {
                    childImageSharp {
                        original {
                            src
                        }
                    }
                }
                }
            }
        }
    `)

    const { frontmatter } = data.mdx
    const ogImageSrc = frontmatter.ogImage.childImageSharp.original.src
    return(
    <Layout>
        <SEO title={frontmatter.title} og={ogImageSrc} />
        <section className="my-16 mdx">
            {children}
        </section>
    </Layout>
    )
}
