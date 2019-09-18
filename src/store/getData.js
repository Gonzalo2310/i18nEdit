import axios from 'axios'

export const getAllTree = (commit) => {
  axios.get('/tree').then((response) => {
    const tree = response.data.data
    commit('updateTree', JSON.stringify(tree.Tree))
    commit('updateElTree', tree.elTree)
    console.log(tree)
  }).catch((error) => {
    console.log('Error: ')
    console.log(error)
  })
}

export const getFileContent = (commit, uuid) => {
  axios.get('/file/content/', { params: { uuid } }).then((response) => {
    console.log(response)
  })
}