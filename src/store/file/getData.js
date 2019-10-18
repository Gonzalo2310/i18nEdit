import apiFetch from '../../utils/fetch'

export const getAllTree = (commit) => {
  apiFetch.get('/tree').then((response) => {
    const tree = response.data.data
    commit('updateElTree', tree)
  }).catch((error) => {
    console.log('Error: ')
    console.log(error)
  })
}

export const getFileContent = (commit, path, name) => {
  apiFetch.get('/file/content/', { params: { path } }).then((response) => {
    commit('updateFile', { file: response.data.data, name })
  }).catch((error) => {
    console.log('error')
    console.log(error)
  })
}
