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

export { readFolder, typeItemFile }
