import express from 'express'
import { resolve } from 'path'
import cors from 'cors'
import findAndReplace from '../src/utils/findAndReplace'
import treeFolder from '../src/utils/Treei18nNode'
import toElementUI from '../src/utils/UI/treeToElementUI'
import dotenv from 'dotenv'
// import { searchUuid } from '../src/utils/searchUUID'
import { readFileContent } from '../src/core/filesSystem'
import { createProject, changeProject } from '../src/utils/projects/functions'

const rootPath = resolve(__dirname, '../../')

// let treeComplex = []
dotenv.config()

export default (app, http) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.get('/', (req, res) => {
    res.sendFile(rootPath + '/i18nEdit/dist/index.html')
  })
  app.get('/tree', (req, res) => {
    Promise.all([treeFolder(rootPath + process.env.APP_EDIT_URL)]).then((response) => {
      // treeComplex = response
      res.json({ data: toElementUI(response) })
    })
  })
  app.get('/file/content', (req, res) => {
    Promise.all([readFileContent(req.query.path)]).then((response) => {
      res.json({ data: JSON.parse(response[0]) })
    })
  })
  app.post('/update', (req, res) => {
    let response = []
    req.body.data.foo.forEach(item => {
      response.push(findAndReplace(item.path, item.label, rootPath))
    })
    res.json({ msg: response })
  })

  app.post('/project/create', (req, res) => {
    const name = req.body.name
    console.log('name: ', name)
    createProject(name)
    res.status(200)
  })
  app.post('/project/update', (req, res) => {
    const project = req.body.project
    const name = req.body.name
    console.log('index: ')
    console.log(project)
    res.json({ data: changeProject(name, project) })
  })
}
