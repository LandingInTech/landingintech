import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import useWindowsDimentions from "../hooks/windows"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"
import TableOfContents from "../components/tables-of-contents"
import SimilarArticlesList from "../components/similarArticles/SimilarArticlesList"

export default props => {
  const allMdx = useStaticQuery(graphql`
    query {
      articles: allMdx(filter: { fields: { slug: { regex: "/articles/" } } }) {
        nodes {
          frontmatter {
            date(formatString: "dddd, DD MMM YYYY")
            title
            excerpt
            tags
            category
          }
          fields {
            slug
          }
          tableOfContents
          timeToRead
        }
      }
    }
  `)

  
  const mdx = allMdx.articles.nodes.filter(article => {
    if (article.fields.slug === props.location.pathname) {
      return article
    }
  })
  console.log("\n\n\n\nTesting mdx! \n\n\n\n")
  console.log(JSON.stringify(mdx))
  
  const { frontmatter } = mdx[0] || mdx
  const ogTitle = frontmatter.title.replace(/\s+/g, "%20").toUpperCase()

  const ogImageSrc = `https://res.cloudinary.com/fabiorosado/image/upload/q_100/c_fit,co_rgb:0efb69,l_text:orbitron_50_style_bold_text_align_center:${ogTitle},w_1012,y_30/v1605190182/twitter_og.png`
  const pageTitle = frontmatter.title

  const { width } = useWindowsDimentions()
  
  const hideTableOfContents = localStorage.getItem("toc")

  return (
    <Layout>
      <SEO title={pageTitle} og={ogImageSrc} />
      {width >= 1350 && !hideTableOfContents ? (
        <TableOfContents items={mdx[0].tableOfContents.items} />
      ) : (
        ""
      )}
      <section className="mt-16">
        <h1 className="text-2xl md:text-5xl text-center">{frontmatter.title}</h1>
        <p className="mt-5 flex text-xs justify-center">
          <span className="flex mr-4 items-center"><i className="gg-calendar mr-2 red"/> {frontmatter.date}</span>
          <span className="flex mr-4 items-center"><i className="gg-eye mr-2 red"/> {mdx[0].timeToRead > 1 ? `${mdx[0].timeToRead} mins to read` : `${mdx[0].timeToRead} min to read`} </span>
          <span className="flex items-center"><i className="gg-tag mr-4 red" />{frontmatter.tags.join(", ")}</span>
        </p>
        <article className="mt-12 md:mx-12 mdx">
          {props.children}
        </article>

      </section>
      <section className="newsletter-cta flex flex-col md:flex-row justify-around p-6 mx-12 mt-6">
        <div className="md:w-1/2 mt-6 md:mt-12">
          <h1>Don't miss out!</h1>
          <p>
            Make sure to subscribe to our monthly newsletter and never miss an
            article or episode.
          </p>
        </div>

        <div>
          <Newsletter />
        </div>
      </section>
      <SimilarArticlesList currentArticlePath={mdx[0].fields.slug} tags={frontmatter.tags} category={frontmatter.category} />
    </Layout>
  )
}
