/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const SoundCloud = require("./src/components/soundcloud-iframe").default

exports.wrapPageElement = ({ element }) => {
    return (
        <>
            <SoundCloud />
            {element}
        </>
    )
}

