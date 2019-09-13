import { readFileContent } from '../../core/filesSystem'

const parserJson = async (file) => {
  return new Promise(function (resolve, reject) {
    readFileContent(file, (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}

export default parserJson
