import React from "react"
import { Link } from "gatsby"

import Logo from "../../images/logo.svg"

const DesktopHeader = () => (
  <header className="text-lg">
    <div>
      <Link className="nav-link m-4" to="/">
        Home
      </Link>
      <Link className="nav-link m-4" to="/about">
        About
      </Link>
      <Link className="nav-link m-4" to="/articles">
        Articles
      </Link>
      <Link className="nav-link m-4" to="/contact">
        Contact
      </Link>
    </div>

    <Link className="mx-8 logo" to="/">
      <img src={Logo} alt="Landing in Tech" width="196" height="95" />
    </Link>

    <div>
      <Link className="nav-link m-4" to="/episodes">
        Episodes
      </Link>
      <a
        href="https://teespring.com/stores/landing-in-tech"
        className="nav-link m-4"
      >
        Store
      </a>
      <a href="https://discord.gg/ZUk4eRh" className="nav-link m-4">
        Community
      </a>
      <Link className="nav-link m-4" to="/newsletter">
        Newsletter
      </Link>
    </div>
  </header>
)

export default DesktopHeader
