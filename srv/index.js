import express from 'express'
import { resolve } from 'path'
import cors from 'cors'
import findAndReplace from '../src/utils/findAndReplace'
import treeFolder from '../src/utils/Treei18nNode'

const rootPath = resolve(__dirname, '../../')

export default (app, http) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.get('/', (req, res) => {
    res.sendFile(rootPath + '/i18nEdit/dist/index.html')
  })
  app.get('/tree', (req, res) => {
    Promise.all([treeFolder(rootPath + '/i18nEdit/src/examples')]).then((response) => {
      res.json({ data: response })
    })
  })
  app.post('/update', (req, res) => {
    let response = []
    req.body.data.foo.forEach(item => {
      response.push(findAndReplace(item.path, item.label, rootPath))
    })
    res.json({ msg: response })
  })
}
