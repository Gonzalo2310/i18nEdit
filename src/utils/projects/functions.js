import { createFile, readFileContent, changeProjectFile } from '../../core/filesSystem'

const PROJECT_URL = 'src/projects/'

export const createProject = (name) => {
  const content = '{\n\t"name": "' + name + '"\n}\n'
  return createFile(PROJECT_URL, name + '.json', content)
}

export const changeProject = (name, project) => {
  console.log('functions: ')
  console.log(project)
  const element = readFileContent(PROJECT_URL + name + '.json')
  element.then((response) => {
    let result = JSON.parse(response)
    project.forEach(item => {
      result[item.field] = item.content
    })
    console.log('result')
    console.log(result)
    const change = changeProjectFile(PROJECT_URL, name + '.json', JSON.stringify(result))
    change.then(() => {
      console.log('exito en el cambio')
    })
      .catch(() => {
        console.log('error en el cambio')
      })
  })
    .catch((error) => {
      console.log(error.response)
    })
  return project
}
