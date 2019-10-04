import { createFile } from '../../core/filesSystem'

export const create = (name) => {
  console.log(createFile('src/projects/', name))
}
