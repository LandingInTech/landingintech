import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import useWindowsDimentions from "../hooks/windows"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"
import TableOfContents from "../components/tables-of-contents"

export default props => {

  const allMdx = useStaticQuery(graphql`
    query {
      articles: allMdx(
        filter: {fields: {slug: {regex: "/articles/"}}}
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
            tableOfContents
          }
        }
      }
  `)

  const mdx = allMdx.articles.nodes.filter(article => {
    if (article.fields.slug === props.path) {
      return article
    }
  })

  const { frontmatter } = mdx[0]
  const ogTitle = frontmatter.title.replace(/\s+/g, "%20").toUpperCase()

  const ogImageSrc = `https://res.cloudinary.com/fabiorosado/image/upload/q_100/c_fit,co_rgb:0efb69,l_text:orbitron_50_style_bold_text_align_center:${ogTitle},w_1012,y_30/v1605190182/twitter_og.png`
  const pageTitle = frontmatter.title
  
  const {width} = useWindowsDimentions()

  const hideTableOfContents = localStorage.getItem("toc")

  return (
    <Layout>
      <SEO title={pageTitle} og={ogImageSrc} />
      {width >= 1350 && !hideTableOfContents ? 
        <TableOfContents items={mdx[0].tableOfContents.items} /> : ""
      }
      <section className="mt-16 md:mx-12 mdx">
          {props.children}
      </section>
      <section className="newsletter-cta flex flex-col md:flex-row justify-around p-6 mx-12 mt-6">
          <div className="md:w-1/2 mt-6 md:mt-12">
            <h1>Don't miss out!</h1>
            <p>Make sure to subscribe to our monthly newsletter and never miss an article or episode.</p>
          </div>

          <div>
            <Newsletter />
          </div>

      </section>
    </Layout>
  )
}