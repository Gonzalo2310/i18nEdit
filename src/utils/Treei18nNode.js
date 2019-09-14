import { readFolder, typeItemFile } from '../core/filesSystem'
import Treei18nNode from '../Class/Treei18nNode'

const treeFolder = async (url, parent = null) => {
  if (!parent) {
    parent = new Treei18nNode()
    parent.Assign.name('Root')
    parent.Assign.uuid()
  }
  let items = await readFolder(url)
  let result = parent
  if (Array.isArray(items)) {
    items.forEach((item) => {
      Promise.all([typeItemFile(url, item)]).then((response) => {
        let element = new Treei18nNode()
        response = response[0]
        if (response.file) {
          element.Assign.type('file')
          element.path = url + '/' + item
          element.Assign.name(item)
          element.Assign.uuid()
        }
        if (response.directory) {
          element.Assign.type('folder')
          element.path = url + '/' + item
          element.Assign.name(item)
          element.Assign.uuid()
          Promise.all([treeFolder(url + '/' + item, element)]).then((response) => {
            element.Assign.children(response[0])
          })
        }
        result.Assign.children(element)
      })
    })
  }
  return Promise.all([result]).then((response) => {
    return response[0]
  })
}

export default treeFolder
