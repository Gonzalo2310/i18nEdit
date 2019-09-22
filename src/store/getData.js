import axios from 'axios'

export const getAllTree = (commit) => {
  axios.get('/tree').then((response) => {
    const tree = response.data.data
    commit('updateElTree', tree)
    console.log(tree)
  }).catch((error) => {
    console.log('Error: ')
    console.log(error)
  })
}

export const getFileContent = (commit, path, name) => {
  axios.get('/file/content/', { params: { path } }).then((response) => {
    console.log('raspiest: ', name)
    console.log(response.data.data)
    commit('updateFile', { file: response.data.data, name })
  }).catch((error) => {
    console.log('error')
    console.log(error)
  })
}
