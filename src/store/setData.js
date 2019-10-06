import axios from 'axios'

export const createProject = (commit, name) => {
  axios.post('/project/create', { name }).then(() => {
    commit('updateNameProject', name)
  }).catch((error) => {
    console.log(error)
  })
}
export const updateProject = (commit, name, fieldName, fieldValue) => {
  axios.post('/project/update', { field: fieldName, content: fieldValue })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
