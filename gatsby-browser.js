/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

exports.wrapRootElement = ({ element }) => {
    return (
        <div>
        <div className="sound-cloud">
            <iframe
                className="mb-0"
                width="100%"
                height="20"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                title="latest episode"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/917548373&color=%23fc4056&inverse=true&auto_play=false&show_user=true"
            />
    </div>
            {element}
        </div>
    )
}
