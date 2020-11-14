/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
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
