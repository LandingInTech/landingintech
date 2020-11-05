import React from "react"

import Layout from "./layout"
import SEO from "../components/seo"
import SimilarEpisodesList from "./similarEpisodes/SimilarEpisodesList"

export default props => {
  const { frontmatter } = props.pageContext

  const ogImageSrc = `https://landingintech.com/${frontmatter.ogImage}`
  const pageTitle = frontmatter.title

  return (
    <Layout>
      <SEO title={pageTitle} og={ogImageSrc} />
      <section className="my-16 mdx">{props.children}</section>
      {frontmatter.category ?
      <SimilarEpisodesList
        currentEpisodePath={props.path}
        tags={frontmatter.tags}
        job={frontmatter.job}
        title={frontmatter.title}
      /> : "" }
    </Layout>
  )
}
