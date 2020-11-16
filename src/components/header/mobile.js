import React, { useState, useEffect, useRef} from "react"
import { Link } from "gatsby"

import Logo from "../../images/logo.svg"

const MobileHeader = () => {

    const [show, setShow] = useState(false)
    const ref = useRef()

    const hideMenu = (e) => {
        if(e.toElement.className !== "navbar navbar-show") {
            setShow(false)
        }
        
    }

    useEffect(() => {
        if (show) {
           document.addEventListener("mousedown", hideMenu)
        }

        return () => {
            document.removeEventListener("mousedown", hideMenu)
        }

    })

    return (
        <header className="text-lg">
            <Link className="mx-8 logo" to="/">
                <img src={Logo} alt="Landing in Tech" width="196" height="95" />
            </Link>

            <button className="flex items-center" aria-label="Toggle menu on mobile" onClick={() => setShow(!show)}>
                <i className="gg-menu-right red mr-2" /> <span className="red">Menu</span>
            </button>

            <div ref={ref} className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}>
                <Link className="nav-link m-4" to="/">
                    Home
                </Link>
                <Link className="nav-link m-4" to="/about">
                    About
                </Link>
                <Link className="nav-link m-4" to="/articles">
                    Articles
                </Link>

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
                <Link className="nav-link m-4" to="/contact">
                    Contact
                </Link>
            </div> 
            
        </header>
    )
}


export default MobileHeader