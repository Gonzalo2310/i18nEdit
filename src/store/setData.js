import axios from 'axios'

export const createProject = (commit, name) => {
  commit('updateNameProject', name)
  axios.post('/project/create', { name }).then(() => {
  }).catch((error) => {
    console.log(error)
  })
}
export const updateProject = (commit, name, fieldName, fieldValue) => {
  axios.post('/project/update', { field: fieldName, content: fieldValue, name })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
