import { createFile, readFileContent } from '../../core/filesSystem'

const PROJECT_URL = 'src/projects/'

export const createProject = (name) => {
  const content = '{\n\tname: \'' + name + '\'\n}\n'
  return createFile(PROJECT_URL, name + '.json', content)
}

export const changeProject = (name, field, content) => {
  const project = readFileContent(PROJECT_URL + name + '.json')
  console.log(project)
  return project
}
