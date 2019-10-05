import axios from 'axios'

export const createProject = (commit, name) => {
  axios.post('/project/create', { name }).then((response) => {
    commit('updateProjectName', response || 'noname')
  }).catch((error) => {
    console.log(error)
  })
}
