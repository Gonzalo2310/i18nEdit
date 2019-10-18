import { getTreeFolder } from './getData'

export function treeInitial ({ commit, state }) {
  getTreeFolder(commit, state.path)
}

export function changePath ({ commit }, path = null) {
  commit('updatePath', path)
}
