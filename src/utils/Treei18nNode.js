import { readFolder, typeItemFile } from '../core/filesSystem'
import Treei18nNode from '../Class/Treei18nNode'
import searchInFileName from './searchLanguage/searchInFileName'
import uuid from 'uuid/v4'

const regex = /^[a-zA-Z|-]+/g

const treeFolder = async (url, parent = null, onlyTree = false) => {
  if (!parent) {
    parent = new Treei18nNode()
    parent.uuid = uuid()
    parent.name = url
    parent.path = url
  }
  let items = await readFolder(url)
  let result = parent
  if (Array.isArray(items)) {
    items.forEach((item) => {
      Promise.all([typeItemFile(url, item)]).then((response) => {
        let element = new Treei18nNode()
        response = response[0]
        if (response.file && !onlyTree) {
          element.type = 'file'
          element.path = url + '/' + item
          element.uuid = uuid()
          element.name = item
          element.language = searchInFileName(item.match(regex)[0])
          result.children.push(element)
        }
        if (response.directory) {
          element.type = 'folder'
          element.path = url + '/' + item
          element.uuid = uuid()
          element.name = item
          Promise.all([treeFolder(url + '/' + item, element, onlyTree)]).then((response) => {
            element.children = response[0]
          })
          result.children.push(element)
        }
      })
    })
  }
  return Promise.all([result]).then((response) => {
    return response[0]
  })
}

export default treeFolder
