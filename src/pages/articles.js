import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/article-card"

export default props => {
  return (
    <Layout>
      <SEO title="Articles" />
      <section className="my-16 md:mx-16 grid grid-cols-1 gap-4">
        <h1 className="plane">Articles</h1>
        {props.data.articles.nodes.map(article => (
          <ArticleCard details={article} key={article.frontmatter.title} />
        ))}
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    articles: allMdx(
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
