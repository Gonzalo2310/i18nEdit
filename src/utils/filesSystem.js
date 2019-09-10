const fs = require('fs')

function readFolder (url) {
  return fs.readdirSync(url)
}

module.exports = readFolder
