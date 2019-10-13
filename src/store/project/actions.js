import { createProject, updateProject } from './setData'

export function setProject ({ commit }, name) {
  createProject(commit, name)
}

export function changeProject ({ commit, state }, { field, content }) {
  updateProject(commit, state.project.name, field, content)
}
