import { createProject, updateProject } from './setData'

export function setProject ({ commit }, name) {
  createProject(commit, name)
}

export function changeProject ({ commit, state }, project) {
  console.log('action: ')
  console.log(project)
  updateProject(commit, state.name, project)
}
