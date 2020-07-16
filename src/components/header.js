import { Link } from "gatsby"
import React from "react"

import Logo from "../images/logo.svg"

const Header = () => (
  <header className="flex justify-center items-center text-lg">
    <div>
        <Link className="nav-link m-4" to="/">Home</Link>
        <Link className="nav-link m-4" to="/about">About</Link>
        <Link className="nav-link m-4" to="/contact">Contact</Link>
    </div>

    <Link className="mx-8" to="/">
      <img src={Logo} alt="Landing in Tech"/>
    </Link>
    
    <div>
      <Link className="nav-link m-4" to="/episodes">Episodes</Link>
      <a href="https://merch.streamelements.com/theflyingdev/" className="nav-link m-4">Store</a>
      <a href="https://discord.gg/ZUk4eRh" className="nav-link m-4">Discord</a>
    </div>

  </header>
)

export default Header
