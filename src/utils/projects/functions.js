import { createFile } from '../../core/filesSystem'

const PROJECT_URL = 'src/projects/'

export const createProject = (name) => {
  const content = 'const project = {}\nexport default project\n'
  console.log(createFile(PROJECT_URL, name + '.js', content))
}

export const changeProject = (name, field, content) => {
  const project = import(PROJECT_URL + name + '.js')
  console.log(project)
}
