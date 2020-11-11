import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimilarEpisodesList from "../components/similarEpisodes/SimilarEpisodesList"

export default props => {
  const { frontmatter } = props.pageContext

  const ogImageSrc = `https://landingintech.com/${frontmatter.ogImage}`
  const pageTitle = frontmatter.title || props.uri.replace("/", "").replace(/^\w/, c => c.toUpperCase())
  return (
    <Layout>
      <SEO title={pageTitle} og={ogImageSrc} />
      <section className="my-16 mdx">{props.children}</section>
      {props.uri.match(/episodes/) ?
      <SimilarEpisodesList
        currentEpisodePath={props.path}
        tags={frontmatter.tags}
        job={frontmatter.job}
        title={frontmatter.title}
      /> : "" }
    </Layout>
  )
}
