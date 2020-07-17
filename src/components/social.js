import React from "react"

import Instagram from "../images/icons/instagram.svg"
import Twitch from "../images/icons/twitch.svg"
import Twitter from "../images/icons/twitter.svg"
import Youtube from "../images/icons/youtube.svg"

export default () => (
    <div className="flex mt-5">
        <a href="https://twitter.com/landingintech" className="mr-5"> <img src={Twitter} alt="Twitter" /></a>
        <a href="https://twitch.tv/theflyingdev" className="mr-5"><img src={Twitch} alt="Twitch" /></a>
        <a href="https://www.youtube.com/channel/UCUCYKCdnRhipFV3Tk852CcA" className="mr-5"><img src={Youtube} alt="Youtube" /></a>
        <a href="https://www.instagram.com/landingintech/" className="mr-5"><img src={Instagram} alt="Instagram" /></a>
    </div>
)