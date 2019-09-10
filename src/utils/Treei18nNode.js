const readFolder = require('./filesSystem')

class Treei18nNode {
 type = null // Folder / File / field
  reference = null // reference or not
  path = null // path element
  content = {
    field: null,
    value: null
  }
  children = []
}

function treeFolder (url, parent = null) {
  if (!parent) {
    parent = new Treei18nNode()
  }
  return readFolder(url)
}

module.exports = treeFolder
