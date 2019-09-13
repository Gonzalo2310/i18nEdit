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

const readFileContent = async (url, callback) => {
  return fs.readFile(url, 'utf8', callback)
}

export { readFolder, typeItemFile, readFileContent }
