
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"


const NewsletterPage = () => (
    <Layout>
        <SEO title="Newsletter" />
        <section className="my-12 flex flex-col mdx">
            <h1 className="my-12 plane">Subscribe to the Newsletter</h1>
            <p>On this monthly newsletter, you will get information about episodes releases, upcoming live talks, articles written and pieces of advice from the guests.</p>
            <div className="newsletter-cta my-6 mr-12 ml-0 p-6">
                <Newsletter/>
            </div>

        </section>
    </Layout>
)

export default NewsletterPage