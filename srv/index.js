import express from 'express'
import { resolve } from 'path'
import cors from 'cors'
import findAndReplace from '../src/utils/findAndReplace'

const rootPath = resolve(__dirname, '../../')

export default (app, http) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.get('/', (req, res) => {
    res.sendFile(rootPath + '/editori18n/dist/index.html')
  })

  app.post('/update', (req, res) => {
    let response = []
    req.body.data.foo.forEach(item => {
      response.push(findAndReplace(item.path, item.label, rootPath))
    })
    res.json({ msg: response })
  })
}
