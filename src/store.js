import Vue from 'vue'
import Vuex from 'vuex'
import { getAllTree, getFileContent } from './store/getData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elTree: []
  },
  mutations: {
    updateElTree: (state, tree) => { state.elTree = tree }
  },
  actions: {
    initTree ({ commit }) {
      getAllTree(commit)
    },
    contentFile ({ commit }, path) {
      getFileContent(commit, path)
    },
    searchById: ({ commit }, uuid) => {
      getFileContent(commit, uuid)
    }
  }
})
