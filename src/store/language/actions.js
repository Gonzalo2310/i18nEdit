import { getTreeFolder } from './getData'

export function treeInitial ({ commit }) {
  getTreeFolder(commit)
}
