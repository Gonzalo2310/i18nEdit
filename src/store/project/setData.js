import apiFetch from '../../utils/fetch'

export const createProject = (commit, name) => {
  commit('updateNameProject', name)
  apiFetch.post('/project/create', { name }).then(() => {
  }).catch((error) => {
    console.log(error)
  })
}
export const updateProject = (commit, name, project) => {
  console.log('fetch: ')
  console.log(project)
  apiFetch.post('/project/update', { project, name })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
