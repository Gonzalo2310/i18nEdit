import { copyFileSync, readFileSync, writeFileSync } from 'fs'

const findAndReplace = (path, label, rootPath) => {
  let fullPath = path.split('.')
  let localPath = rootPath + '/i18n'
  let sizePath = fullPath.length - 2
  if (sizePath < 0) {
    return null
  }
  for (let i = 0; i < sizePath; ++i) {
    localPath += '/' + fullPath[i]
  }
  const realPath = localPath + '/' + fullPath[sizePath] + '.js'
  copyFileSync(realPath, realPath + '.old')
  const searchString = fullPath[fullPath.length - 1] + ':'
  const fileContent = readFileSync(realPath, { encoding: 'utf8' })
  let linesOrigin = fileContent.split('\n')
  let line = 0
  linesOrigin.forEach((item, index) => {
    if (item.includes(searchString)) {
      line = index
    }
  })
  if (line > 0) {
    linesOrigin[line] = '\t' + searchString + ' \'' + label + '\','
  }
  const destinity = linesOrigin.join('\n')
  writeFileSync(realPath, destinity)
  return 200
}

export default findAndReplace
