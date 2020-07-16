/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../styles/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
            minHeight: `100vh`
          }}>{children}</main>
        <footer>
          <Link className="nav-link m-4" to="/">Home</Link>
          <Link className="nav-link m-4" to="/about">About</Link>
          <Link className="nav-link m-4" to="/episodes">Episodes</Link>
          <a href="https://merch.streamelements.com/theflyingdev/" className="nav-link m-4">Store</a>
          <a href="https://discord.gg/ZUk4eRh" className="nav-link m-4">Discord</a>
          <Link className="nav-link m-4" to="/donate">Donate</Link>
          <Link className="nav-link m-4" to="/contacts">Contacts</Link>
        </footer>
    </>
  )
}


export default Layout
