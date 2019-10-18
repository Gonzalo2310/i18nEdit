import apiFetch from '../../utils/fetch'

export const getTreeFolder = (commit, path = null) => {
  apiFetch.get('/tree/language', { params: { path } }).then((response) => {
    commit('updateTree', response.data.data)
    commit('updatePath', response.data.path)
  }).catch((error) => {
    console.log('error')
    console.log(error)
  })
}
