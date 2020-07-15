import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="flex justify-center items-center flex-col py-12">
      <iframe className="mb-0" src="https://player.twitch.tv/?video=677630761&parent=localhost:3000" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620" title="latest episode" />
      <div className="latest-episode">LATEST EPISODE</div>
    </section>
    
  </Layout>
)

export default IndexPage
