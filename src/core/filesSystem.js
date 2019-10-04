import fs from 'fs'

const readFolder = async (url) => {
  return fs.readdirSync(url)
}

const typeItemFile = async (url, file) => {
  const basicResponse = fs.statSync(url + '/' + file)
  return {
    directory: basicResponse.isDirectory(),
    file: basicResponse.isFile()
  }
}

const readFileContent = async (url) => {
  return fs.readFileSync(url, 'utf8')
}

const createFile = async (path, name) => {
  return fs.closeSync(fs.openSync(path + name, 'w'))
}
const deleteFile = async (path, name) => {
  fs.unlinkSync(path + name)
}
const changeProject = async (path, name, content) => {
  fs.writeFile(path + name, content, (err) => {
    if (err) {
      console.error(err)
    }
  })
}

export { readFolder, typeItemFile, readFileContent, changeProject, createFile, deleteFile }
