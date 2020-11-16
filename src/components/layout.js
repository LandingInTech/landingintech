/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import useWindowsDimensions from "../hooks/windows"

import MobileHeader from "./header/mobile"
import DesktopHeader from "./header/desktop"
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

  const {width} = useWindowsDimensions()

  return (
    <>
    {width > 530 ? <DesktopHeader siteTitle={data.site.siteMetadata.title} /> : <MobileHeader siteTitle={data.site.siteMetadata.title} />}
      
      <main
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          minHeight: `100vh`,
        }}
      >
        {children}
      </main>
      <footer className="text-sm">
        <Link className="nav-link mr-4" to="/">
          Home
        </Link>
        <Link className="nav-link mr-4" to="/about">
          About
        </Link>
        <Link className="nav-link mr-4" to="/episodes">
          Episodes
        </Link>
        {width > 280 && 
          <>
            <a
              href="https://teespring.com/stores/landing-in-tech"
              className="nav-link mr-4"
            >
              Store
            </a>
            <a href="https://discord.gg/ZUk4eRh" className="nav-link mr-4">
              Discord
            </a>
            <a
              className="nav-link mr-4"
              href="https://www.buymeacoffee.com/FabioRosado"
            >
              Donate
            </a>
            <Link className="nav-link mr-4" to="/contact">
              Contacts
            </Link>
          </>
        }

      </footer>
    </>
  )
}

export default Layout
