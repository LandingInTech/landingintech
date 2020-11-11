import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"

export default props => {
  const { frontmatter } = props.pageContext

  const ogImageSrc = `https://landingintech.com/${frontmatter.ogImage}`
  const pageTitle = frontmatter.title
  return (
    <Layout>
      <SEO title={pageTitle} og={ogImageSrc} />
      <section className="mt-16 mdx">
          {props.children}
      </section>
      <section className="newsletter-cta flex justify-around p-6 mx-12 mt-6">
          <div className="w-1/2 mt-12">
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