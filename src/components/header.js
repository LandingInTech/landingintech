import { Link } from "gatsby"
import React from "react"

import Logo from "../images/logo.svg"

const Header = () => (
  <header className="flex justify-center flex-col md:flex-row items-center text-lg">
  <div className="sound-cloud">
    <iframe className="mb-0" width="100%" height="20" scrolling="no" frameBorder="no" allow="autoplay" title="latest episode" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/868848340&color=%23fc4056&inverse=true&auto_play=false&show_user=true"/>
  </div>
  
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
      <a href="https://teespring.com/stores/landing-in-tech" className="nav-link m-4">Store</a>
      <a href="https://discord.gg/ZUk4eRh" className="nav-link m-4">Discord</a>
    </div>

  </header>
)

export default Header