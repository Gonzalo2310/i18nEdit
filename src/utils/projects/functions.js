import { createFile } from '../../core/filesSystem'

export const createProject = (name) => {
  const content = 'const project = {}\nexport default project\n'
  console.log(createFile('src/projects/', name + '.js', content))
}
