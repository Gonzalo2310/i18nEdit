import { readFileContent } from '../../core/filesSystem'

const parserJson = async (file) => {
  const result = Promise.all([readFileContent(file)]).then((response) => {
    return JSON.parse(response[0])
  })
  const awaitResult = await result
  return awaitResult
}

export default parserJson
