import { getAllTree, getFileContent } from './getData'

export function initTree ({ commit }) {
  getAllTree(commit)
}

export function contentFile ({ commit }, { path, name }) {
  getFileContent(commit, path, name)
}
