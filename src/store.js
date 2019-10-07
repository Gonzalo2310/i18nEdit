import Vue from 'vue'
import Vuex from 'vuex'
import { getAllTree, getFileContent } from './store/getData'
import { createProject, updateProject } from './store/setData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elTree: [],
    files: [],
    project: {}
  },
  mutations: {
    updateElTree: (state, tree) => { state.elTree = tree },
    updateFile: (state, { file, name }) => {
      console.log(file, name)
      state.files.push({
        name,
        file
      })
    },
    updateNameProject (state, name) {
      console.log('muttation name: ', name)
      state.project.name = name
    },
    updateCurrentProject: (state, project) => { state.project = project }
  },
  actions: {
    initTree ({ commit }) {
      getAllTree(commit)
    },
    contentFile ({ commit }, { path, name }) {
      getFileContent(commit, path, name)
    },
    searchById: ({ commit }, uuid) => {
      getFileContent(commit, uuid)
    },
    setProject: ({ commit }, name) => {
      console.log('name: ', name)
      createProject(commit, name)
    },
    changeProject ({ commit, state }, { field, content }) {
      updateProject(commit, state.project.name, field, content)
    }
  }
})
