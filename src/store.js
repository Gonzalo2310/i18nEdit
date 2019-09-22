import Vue from 'vue'
import Vuex from 'vuex'
import { getAllTree, getFileContent } from './store/getData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elTree: [],
    files: []
  },
  mutations: {
    updateElTree: (state, tree) => { state.elTree = tree },
    updateFile: (state, { file, name }) => {
      console.log(file, name)
      state.files.push({
        name,
        file
      })
    }
  },
  actions: {
    initTree ({ commit }) {
      getAllTree(commit)
    },
    contentFile ({ commit }, { path, name }) {
      console.log('path: ', path)
      console.log('name: ', name)
      getFileContent(commit, path, name)
    },
    searchById: ({ commit }, uuid) => {
      getFileContent(commit, uuid)
    }
  }
})
