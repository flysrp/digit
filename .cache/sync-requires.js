const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-theme-andy-src-templates-note-js": hot(preferDefault(require("/Users/song/Dropbox/Gatsby/garden/node_modules/gatsby-theme-andy/src/templates/note.js")))
}

