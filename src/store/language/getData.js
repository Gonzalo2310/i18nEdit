import apiFetch from '../../utils/fetch'

export const getTreeFolder = (commit) => {
  apiFetch.get('/tree/language').then((response) => {
    commit('updateTree', response.data.data)
  }).catch((error) => {
    console.log('error')
    console.log(error)
  })
}
