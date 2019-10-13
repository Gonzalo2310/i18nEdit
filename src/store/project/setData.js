import apiFetch from '../../utils/fetch'

export const createProject = (commit, name) => {
  commit('updateNameProject', name)
  apiFetch.post('/project/create', { name }).then(() => {
  }).catch((error) => {
    console.log(error)
  })
}
export const updateProject = (commit, name, fieldName, fieldValue) => {
  apiFetch.post('/project/update', { field: fieldName, content: fieldValue, name })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
