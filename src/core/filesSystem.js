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

const createFile = async (path, name, content = null) => {
  return fs.writeFile(path + name, content, function (err) {
    if (err) throw err
  })
}
const deleteFile = async (path, name) => {
  fs.unlinkSync(path + name)
}
const changeProjectFile = async (path, name, content) => {
  fs.writeFile(path + name, content, (err) => {
    if (err) {
      console.error(err)
    }
  })
}

const existFile = async (path, name) => {
  return fs.access(path + name, fs.F_OK, (err) => {
    if (err) {
      console.error(err)
      return
    }
    return true
  })
}

export { readFolder, typeItemFile, readFileContent, changeProjectFile, createFile, deleteFile, existFile }
