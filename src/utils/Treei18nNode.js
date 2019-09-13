import { readFolder, typeItemFile } from '../core/filesSystem'
import Treei18nNode from '../Class/Treei18nNode'

const treeFolder = async (url, parent = null) => {
  if (!parent) {
    parent = new Treei18nNode()
    parent.label = 'Root'
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
          element.label = item
        }
        if (response.directory) {
          element.type = 'folder'
          element.path = url + '/' + item
          element.label = item
          Promise.all([treeFolder(url + '/' + item, element)]).then((response) => {
            element.children = response[0]
          })
        }
        result.children.push(element)
      })
    })
  }
  return Promise.all([result]).then((response) => {
    return response[0]
  })
}

export default treeFolder
