import axios from 'axios'

export const getAllTree = (commit) => {
  axios.get('/tree').then((response) => {
    const tree = response.data.data
    commit('updateTree', tree.Tree)
    commit('updateElTree', tree.elTree)
    console.log(tree)
  }).catch((error) => {
    console.log('Error: ')
    console.log(error)
  })
}
