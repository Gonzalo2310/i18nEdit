import { readFolder, typeItemFile } from '../core/filesSystem'
// import typeItemFile from '../core/filesSystem'

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

const treeFolder = async (url, parent = null) => {
  if (!parent) {
    parent = new Treei18nNode()
  }
  let items = await readFolder(url)
  let result = parent
  if (Array.isArray(items)) {
    items.forEach((item) => {
      Promise.all([typeItemFile(url, item)]).then((response) => {
        let element = new Treei18nNode()
        response = response[0]
        if (response.file) {
          element.type = 'file'
          element.path = url + '/' + item
        }
        if (response.directory) {
          element.type = 'folder'
          element.path = url + '/' + item
          Promise.all([treeFolder(url + '/' + item, element)]).then((response) => {
            element.children = response[0]
          })
        }
        result.children.push(element)
      })
    })
  }
  return Promise.all([result]).then((response) => {
    return response
  })
}

export default treeFolder
